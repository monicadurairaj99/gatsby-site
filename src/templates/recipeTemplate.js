import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { firestore } from  "../../firebase.js"

import Comments from "../components/comments.js"

export default function RecipeTemplate({data}) {
    const recipe = data.contentfulReceipes
    const [comments, setComments] = useState([])

    useEffect(() => {
      firestore.collection(`comments`).orderBy(`Created`, `desc`).onSnapshot(snapshot => {
        const posts = snapshot.docs
          .filter(doc => doc.data().Page === recipe.name)
          .map(doc => {
            return { id: doc.id, ...doc.data() }
          })
        setComments(posts)
      })
    }, [recipe] )

    return (
        <Layout>
            <h2>{recipe.name}</h2>
            <img src={recipe.image.file.url} alt={recipe.name} class="img-thumbnail" />
            <p>
                {recipe.description.description}
            </p>
            <Comments comments={comments} page={recipe.name} />
        </Layout>
    )
}

export const query = graphql`
query recipeQuery($slug: String!) {
    contentfulReceipes(name: {eq: $slug}) {
      name,
      description {
        description
      }
      image {
        file {
          url
        }
      }
      
    }
  }
` 