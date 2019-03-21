import axios from 'axios';

export const MAIN_GITHUBLINKS_FETCH = "MAIN_GITHUBLINKS_FETCH";

const links = [
  {
    repo: "https://github.com/MohamedLamineAllal/HtmlTableEditing",
    examples: "", // or list []
    title: "htmlTableEditing",
    description:
      "A library that make any html table editable, wiht built in ajax capability, riche api, and helpers, error handling, flexible undo capability and more. Built for a need to use it with Datatable.js library. But it work in all situation for any html table.",
      media: {
        type: 'img',
        src: '/github/avatar/me.jpg'
      }
  },
  {
    repo: "https://github.com/MohamedLamineAllal/gulpTaskLogger",
    examples: "", // or list []
    title: "gulpTaskLogger",
    description:
      "A helper for gulp, to log at task start, end, and any other log, with time, and string formatting, and collor personalisation, and more .., Can be used as a cli program loggin helper too out of gulp. ",
    media: {
      type: 'img',
      src: '/github/avatar/me.jpg'
    }
  },
  {
    repo: "https://www.npmjs.com/package/@nunkisoftware/link-preview",
    examples: "", // or list []
    title: "htmlTableEditing",
    description:
      "A library that make any html table editable, wiht built in ajax capability, riche api, and helpers, error handling, flexible undo capability and more. Built for a need to use it with Datatable.js library. But it work in all situation for any html table.",
    media: {
      type: 'img',
      src: '/github/avatar/me.jpg'
    }
  },
  {
    repo: "https://www.npmjs.com/package/@nunkisoftware/link-preview",
    examples: "", // or list []
    title: "htmlTableEditing",
    description:
      "A library that make any html table editable, wiht built in ajax capability, riche api, and helpers, error handling, flexible undo capability and more. Built for a need to use it with Datatable.js library. But it work in all situation for any html table.",
    media: {
      type: 'img',
      src: '/github/avatar/me.jpg'
    }
  },
  {
    repo: "https://www.npmjs.com/package/@nunkisoftware/link-preview",
    examples: "", // or list []
    title: "htmlTableEditing",
    description:
      "A library that make any html table editable, wiht built in ajax capability, riche api, and helpers, error handling, flexible undo capability and more. Built for a need to use it with Datatable.js library. But it work in all situation for any html table.",
    media: {
      type: 'img',
      src: '/github/avatar/me.jpg'
    }
  },
  {
    repo: "https://www.npmjs.com/package/@nunkisoftware/link-preview",
    examples: "", // or list []
    title: "htmlTableEditing",
    description:
      "A library that make any html table editable, wiht built in ajax capability, riche api, and helpers, error handling, flexible undo capability and more. Built for a need to use it with Datatable.js library. But it work in all situation for any html table.",
    media: {
      type: 'img',
      src: '/github/avatar/me.jpg'
    }
  },
  {
    repo: "https://www.npmjs.com/package/@nunkisoftware/link-preview",
    examples: "", // or list []
    title: "htmlTableEditing",
    description:
      "A library that make any html table editable, wiht built in ajax capability, riche api, and helpers, error handling, flexible undo capability and more. Built for a need to use it with Datatable.js library. But it work in all situation for any html table.",
    media: {
      type: 'img',
      src: '/github/avatar/me.jpg'
    }
  },
  {
    repo: "https://www.npmjs.com/package/@nunkisoftware/link-preview",
    examples: "", // or list []
    title: "htmlTableEditing",
    description:
      "A library that make any html table editable, wiht built in ajax capability, riche api, and helpers, error handling, flexible undo capability and more. Built for a need to use it with Datatable.js library. But it work in all situation for any html table.",
    media: {
      type: 'img',
      src: '/github/avatar/me.jpg'
    }
  }
];

export default () => {
    return {
        type: MAIN_GITHUBLINKS_FETCH,
        payload: links//axios.get('')
    };
}
