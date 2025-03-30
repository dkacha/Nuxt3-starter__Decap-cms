import matter from 'gray-matter'
import { marked } from 'marked'

export default defineNuxtPlugin((nuxtApp) => {
  // Definování globální funkce pro zpracování Markdown souborů
  nuxtApp.provide('parseMarkdown', (mdContent) => {
    const { data, content } = matter(mdContent)
    const contentHtml = marked(content)

    return {
      frontMatter: data,    // Obsah front-matter jako objekt
      contentHtml: contentHtml,  // Převedený HTML obsah
    }
  })
})