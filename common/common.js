// common functions to simplify the codebase


const format = require('date-fns/format')

export const convertDateToString = (date) => {
  return format(new Date(date), 'PPPP')
}

export const returnSelectedFields = (data) => {
  return data.map((_) => {
    return {
      title: _.title,
      date: _.date,
      draft: _.draft,
      category: _.category,
      readingTime: _.readingTime,
      slug: _.slug,
    }
  })
}