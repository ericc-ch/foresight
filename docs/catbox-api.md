# Catbox Tools

Source: https://catbox.moe/tools.php

Tools

## ShareX Configuration

---

[Click here](resources/catbox.moe.sxcu) to download the easy setup file if you're running ShareX 11.5 or greater.

[Click here](sharexcode.txt) to see the ShareX config if you're running a version less than 11.5.

## Browser Extensions

---

You can install the latest Chrome/Vivaldi Extension by clicking [here (Ver. 1.0.1)](#) [\[Alt. Webstore Link\]](https://chrome.google.com/webstore/detail/catbox-uploader/onjcjibkpfjeoncglaobbjllfdhpcpeb).

You can download the latest Firefox Extension [here (Ver. 1.0.2)](https://addons.mozilla.org/en-US/firefox/addon/catbox-uploader/).

This extension adds a context menu button on images, videos, and audio for quick saving/rehosting to catbox.moe.

You can view the "source" by opening the file with your favorite archive file tool.

After installation, be sure to check the options menu.

## Community Tools

---

## PyUpload

A simple CLI upload tool written in Python

[https://github.com/yukinotenshi/pyupload](https://github.com/yukinotenshi/pyupload)

An implementation of the Catbox.moe API in Bash

[https://gist.github.com/MineBartekSA/1d42d6973ddafb82793fd49b4fb06591](https://gist.github.com/MineBartekSA/1d42d6973ddafb82793fd49b4fb06591)

## node-catbox

An implementation of the Catbox.moe API in Node.js/TypeScript, available through npm.

[https://www.npmjs.com/package/node-catbox](https://www.npmjs.com/package/node-catbox)

An implementation of the Catbox.moe API in Node.js, available through npm. (potentially abandoned)

[https://www.npmjs.com/package/catbox.moe](https://www.npmjs.com/package/catbox.moe)

## go-catbox

An implementation of the Catbox.moe API in Go.

[https://github.com/wabarc/go-catbox](https://github.com/wabarc/go-catbox)

## katbox

An implementation of the Catbox.moe API in Kotlin.

[https://github.com/Olivki/katbox](https://github.com/Olivki/katbox)

## catbox

An implementation of the Catbox.moe API in Rust.

[https://github.com/Savolae/catbox](https://github.com/Savolae/catbox)

## CatBox.NET

An implementation of the Catbox.moe API in C#

[https://github.com/ChaseDRedmon/CatBox.NET](https://github.com/ChaseDRedmon/CatBox.NET)

## API

---

The API is located at https://catbox.moe/user/api.php

There are 8 different "request types" that are valid to the Catbox API. 3 of them are for files, the other 5 are for albums.

Italicized arguments are optional. Obviously the actual order of the variables doesn't matter, but for sensiblity you should keep them as so.

File uploads

Note: for anonymous uploads, simply don't supply a userhash.

**File Uploads**

`reqtype="fileupload" _userhash="####"_ fileToUpload=(file data here)`

**URL Uploads**

`reqtype="urlupload" _userhash="####"_ url="http://i.imgur.com/aksF5Gk.jpg"`

Deleting Files

**Deleting Files**

`reqtype="deletefiles" userhash="####" files="eh871k.png d9pove.gif"`

Album Management

For an anonymous album, don't give a userhash. Albums created anonymously CANNOT be edited or deleted.

Albums are currently limited to 500 files. This may be removed in the future.

**Creating an album**

`reqtype="createalbum" userhash="####" title="Title Here" _desc="Description Here"_ files="8ce67f.jpg f51d7d.jpg 65ea43.jpg"`

The files argument should be SINGLE SPACE SEPARATED FILES which exist on Catbox.

Duplicate file entries in the file argument will be removed, but please don't do that anyway.

**Editing an album**

`reqtype="editalbum" userhash="####" short="pd412w" title="Title Here" desc="Description Here" files="8ce67f.jpg f51d7d.jpg 65ea43.jpg"`

**EDITALBUM IS A VERY POWERFUL REQUEST TYPE. You MUST supply every argument, or else it will be taken as "". Think of it as a direct input.**

The "short" is the 6 alphanumeric characters in the url that's generated.

If you want to easily add or remove files, use the following two request types.

**Adding files to an album**

`reqtype="addtoalbum" userhash="####" short="pd412w" files="8ce67f.jpg f51d7d.jpg 65ea43.jpg"`

**Removing files from an album**

`reqtype="removefromalbum" userhash="####" short="pd412w" files="8ce67f.jpg f51d7d.jpg 65ea43.jpg"`

**Deleting an album**

`reqtype="deletealbum" userhash="####" short="pd412w"`

cURL to API

If you want to make curl requests to the API, here are examples of both.

`curl -F "reqtype=urlupload" -F "userhash=####" -F "url=https://files.catbox.moe/174bac.jpg" https://catbox.moe/user/api.php`

`curl -F "reqtype=fileupload" -F "userhash=####" -F "fileToUpload=@cutie.png" https://catbox.moe/user/api.php`

### If you have any questions or have created something, [email me](contact.php).

![cute grill](pictures/qts/1363382418078.png)

---

