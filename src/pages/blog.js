import React from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql ,Link} from "gatsby";


const Blog = () => {

    const data = useStaticQuery(
        graphql`
        query{
            allMarkdownRemark {
              edges {
                node {
                  frontmatter{
                    title
                    date
                  }
                  html
                  excerpt
                  fields{
                      slug
                  }
                }
              }
            }
          }
        `
    )

    console.log(data)
    return (
        <Layout>
            <div>
                <h2>Blog</h2>
                <ol>
                    {data.allMarkdownRemark.edges.map((edge,index)=>
                        <li key={index}>
                            <Link
              to={edge.node.fields.slug}
             
            >
                            <h4>{edge.node.frontmatter.title}</h4>
                            <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                        )}
                </ol>
                </div>
        </Layout>)

}

export default Blog