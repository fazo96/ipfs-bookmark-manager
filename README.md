# IPFS Bookmark Manager

Just a simple app, designed to be hosted via ipfs, that lets you manage bookmarks so you can keep track of them IPFS hashes. The bookmarks are stored in the browser's `localStorage`.

[Try it out!](http://gateway.ipfs.io/ipfs/QmfX93JbzAzVZ6DKED1LyxzXeJ6Q1svZcTCnWJS82eryLd)
It's hosted via IPFS on a server with very little bandwidth, so it's going to take a while to load.
You can of course help by pinning it on your system, so once downloaded it's never gonna go away

I know the user experience is horrible at the moment, but this is the very first working version

### Hacking

Make sure you have bower and npm, then clone the repo, run `npm install && bower install` to install deps then `gulp` to build it.
The application is built in the `test` directory and a minified version is available in the `dist` directory.

### License

The MIT License (MIT)

Copyright (c) 2015 Enrico Fasoli (fazo96)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
