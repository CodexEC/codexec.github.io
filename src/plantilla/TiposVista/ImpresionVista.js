/* eslint-disable */
// TODO: implemetar una vista tipo reporte
import React from "react";
import Grid from "material-ui/Grid";
// import PostPreview from "../PostPreview";

const PrintView = ({ posts }) => (
  <Grid container justify="center">
    <Grid item xs={12}>
      <h1>Today{"'"}s Bulletin</h1>
      {posts &&
        posts.edges.map(post => (
          <PostPreview
            content={post.node.content}
            key={post.node.id}
            title={post.node.title}
            view="print"
          />
        ))}
    </Grid>
  </Grid>
);

export default PrintView;
