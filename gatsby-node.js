exports.createPages = async function ({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `)
  //create pages for post

  const postPerPage = 3

  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? "/blog" : `/blog/${i + 1}`,
      component: require.resolve("./src/templates/allPosts.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentpage: i + 1,
      },
    })
  })

  data.allMdx.edges.forEach(edge => {
    const slug = `/blog/${edge.node.frontmatter.slug}`
    const id = edge.node.id
    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/singlePost.js"),
      context: { id },
    })
  })
}
