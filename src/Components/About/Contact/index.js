import React from "react"
import { Typography, IconButton, Link } from "@material-ui/core"
import {
  Mail as MailIcon,
  LinkedIn as LinkedInIcon
} from "@material-ui/icons"

const email = "tom.dugovic@gmail.com?subject=Contracting Services";
const li_url = "https://www.linkedin.com/in/tom-dugovic";

export default function Contact() {
  return (
    <>
      <Typography variant="h3">Contact me!</Typography>

      <IconButton
        href={li_url}
        target="_blank"
        renderAs={Link}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        href={`mailto:${email}`}
        renderAs={Link}
      >
        <MailIcon />
      </IconButton>
    </>
  )
}
