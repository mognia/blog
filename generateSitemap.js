const fs = require('fs');
const path = require('path');
// const { getPostsMetaData } = require('./lib/getPostsData');
const postsDirectory = path.join(process.cwd(), 'posts');
const mdx_file_extention = '.mdx';
const generateSitemap = async () => {
    const blogPosts = getAllFilesInDirectory()
    const baseUrl = 'https://www.mognia.dev';

    const sitemapXml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${blogPosts
        .map(
            (post) => `
            <url>
              <loc>${baseUrl}/blog/${post.name}</loc>
              <changefreq>weekly</changefreq>
              <priority>0.8</priority>
            </url>
          `
        )
        .join('')}
    </urlset>
  `;

    fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemapXml.trim());
};
const getAllFilesInDirectory=() => {
    const fileNames = fs.readdirSync(postsDirectory);
    const allFiles = fileNames.map((fileName) => {
        return path.parse(fileName)
    })
   return  allFiles.filter(parsedFile => parsedFile.ext === mdx_file_extention);

}
generateSitemap();
