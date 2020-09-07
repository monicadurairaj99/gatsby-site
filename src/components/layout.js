import React from "react"
import { Link } from "@reach/router"
import "./layout.scss"
import { StaticQuery, graphql } from "gatsby"

export default function Layout({children}) {
  return (
      <div style={{ maxWidth: '800px', margin: '0 auto'}}>
        <StaticQuery
            query={graphql`
            query HeadingQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
            `}
            render={data => (
            <header>
                <h1>{data.site.siteMetadata.title}</h1>
            </header>
            )}
        />
        
           <div class="container">
           
           <img class="img-fluid" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="The Beach"></img>
           
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="about">About</Link></li>
          </ul>
          
          </div>
          {children}
          
          
      </div>
  )
} 