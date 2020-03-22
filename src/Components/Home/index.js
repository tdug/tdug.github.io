import React from "react"
import { Typography, Link } from "@material-ui/core"

export default function Home() {
  return (
    <>
      <Typography variant="h3">Welcome!</Typography>
      <Typography>
        This site is built with React.js and Material-UI, and hosted on GitHub pages.
      </Typography>
      <br />
      <Link
        href="https://github.com/tdug/tdug.github.io/tree/development"
        target="_blank"
        color="textPrimary"
      >
        View Source
      </Link>
    </>
  )
}
