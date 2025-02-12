# NOTES

## Technical

### Critical

- Fix code blogs not showing titles and collapsable code!!!
- Add HACKER/MAKER Tags somehow
- Google analytics - Needs more setup!
  - Google Search Console
  - <https://docs.astro.build/en/guides/integrations-guide/partytown/>
  - Add SiteMap
- Combine tutorial series
  - Navigation steps on the side within series
  - Or linear progression somehow

### Nice to Have

- Mermaid graphs
  - <https://github.com/remcohaszing/rehype-mermaid>
  - <https://github.com/withastro/starlight/discussions/1259#discussioncomment-9300105>
  - <https://code.juliancataldo.com/component/astro-diagram/#doc>
  - Example:
    - https://mermaid.live/edit#pako:eNp1U9uO2yAQ_RVEFOXFm8T4koSHSrn2pZVWXamVaueB2DimscECvN1dy_9eDIm6TbVYQpyZc-ZYw9DBTOQUYjged4wzjUE30SWt6QSDyYkoOvGAC3wnkpFTRZXJdEMuu5ylaHk-MEdFOHwT0Pf9eJzysyRNCb58SzkwK6uIUjtagNKIqAQFqyo8itECkdBTWooLxaMwDBcR8TJRCYl_l0zTO3FN_mqjeUEWpzvtHV-VRNL8KiiKxSqL_xPcJCy7gDVIYal1o_BsRl9I3VR0mol6pjSROoUm-1kALcCTw--lm4-kVLfNe6nDTur2dWLrHcHDwyewSSzj6FIbG9v6ydZcEdjzZyYFrynXR4yxa-U_RJT8EPKiStE4o4Fmm-ZYW9_SdsmBSaXBoxS_aGZruU5dWcixHNpZsPeTdf5MeGbaOfzLvf-VhZLH8lWxjFRg07Iqv_PfO_-D8eeG8oH_3vkfoAdrKmvCcjOc3ZBLoZ3DFGJzzGlB2speQ2-opNXi6ZVnEGvZUg-awTyXN9A2OdF0x4iZyvoWbAj_KYSBBamUwxB38AViFCymQYDCeLmM0CpexR58hTiezlcojpf-HAXLwJx7D77ZAvPpyvej2MiipY98FAUepDnTQn51T8u-sP4PUvQNEw
- Charts
  - ChartJS (popular)
  - Rechart (React-based) - THIS!
- Site map for Google Searche
  - <https://docs.astro.build/en/guides/integrations-guide/sitemap/>
  - Actively creates a XML file to outline entire website
- CODE!
  - Expressive Code: <https://expressive-code.com/installation/>
  - Keep code in files in another folder?
  - Highlighting lines and items
  - Diffs
  - Themes
  - withOutput - expressive-code-output
- Robots.txt
  - <https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#why-astro-robots-txt>
- Blog subscription
  - RSS Feed
    - dlvrt.it
    - Tied to email campaign (integrate with mailchimp)
    - User how-to article
  - Email service
    - <https://buttondown.com/>
    - Mailchimp
- Adjust spacing on TOC
- Figure out how to present References (smaller font?)
- ASCII Heading?

### Resources

- Code Block highlighting

  - <https://expressive-code.com/key-features/syntax-highlighting/>

- Embed any media into post

  - <https://astro-embed.netlify.app/getting-started/>

- Icons

  - <https://www.astroicon.dev/getting-started/>
  - <https://tabler.io/icons>

- Emojis

  - `remark-emoji` converts shortcodes (:heart_eyes:) to actual emoji characters (😍)
  - `rehypeAccessibleEmojis` then wraps those emoji characters with accessible spans
  - `emoji-blast` astro plugin
    - Explosion of emojis at a certain point of website
    - <https://www.emojiblast.dev/demos/basic>
  - List of Emojis:
    - <https://gist.github.com/rxaviers/7360908>
    - <https://emojipedia.org/>
