import { SupaClient } from "common/utils/supabase";
import { allPosts, allSnippets, allPersonals } from ".contentlayer/generated";
import { returnSelectedFields } from "common";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const postSlugList = returnSelectedFields(allPosts).map((_) => {
        return _.slug;
      });
      const snippetSlugList = returnSelectedFields(allSnippets).map((_) => {
        return _.slug;
      });
      const personalPostSlugList = returnSelectedFields(allPersonals).map(
        (_) => {
          return _.slug;
        }
      );
      if (
        postSlugList.includes(req.query.slug) ||
        snippetSlugList.includes(req.query.slug) ||
        personalPostSlugList.includes(req.query.slug)
      ) {
        await SupaClient.rpc(process.env.PROCEDURE_NAME, {
          slug: req.query.slug,
        });
        return res.status(200).json({
          message: `viewCountUpdated`,
        });
      }
    } catch (error) {
      return res.json({
        error: "An Error has occured",
      });
    }
  }
  if (req.method === "GET") {
    try {
      const { data, error } = await SupaClient.from(process.env.DB)
        .select("views")
        .filter("post", "eq", req.query.slug);
      if (data) {
        return res.status(200).json({
          views: data[0]?.views || null,
        });
      } else if (error) {
        throw error;
      }
    } catch (error) {
      return res.json({
        error: "An Error has occured",
      });
    }
  }

  return res.status(400).json({
    message: "Unsupported Request",
  });
}
