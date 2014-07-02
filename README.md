# Griffith

[![Build Status](http://teamcity.ap2.us:8111/app/rest/builds/buildType:%28id:solutions_delivery_Griffith_Staging%29/statusIcon)](http://teamcity.ap2.us:8111/viewType.html?buildTypeId=solutions_delivery_Griffith_Staging)

Girffith is the internal name for the [appendTo](http://appendto.com) implementation 
of Telescope. There is information in the [Telescope](#Telescope) section below on 
what the app is and some basic install info. This repo will be used for alterations 
to the application for our use.

## Branching

In order to allow for updates from the source repository the `master` branch of 
this fork should be kept __completely clean__ from any changes necessary for the 
appendTo implementation. Instead, any changes should be merged into the `a2-build` 
branch (from a feature or bug fix branch perhaps). If any code is intended to 
be submitted back to the source repository then it should be kept in a branch and 
submitted (via PR) to the Telelscope project.

### Feature and Bug Development

When a new feature begins development - or a bug fix is being worked on - create a 
new branch off of `a2-build` with a semantic name that is prefixed with `a2-` to 
distinguish them from branches pulled in from the source repository.

For example, if you were working on the Google authentication piece you might create 
an `a2-google-auth` branch off of `a2-build`. When complete, a PR should be opened 
merging that feature branch back into `a2-build`. However, `a2-build` should 
**never** be merged back into `master`.

When changes occur in the source repository, those changes will be fetched into the 
a2 fork's `master` branch, then merged down into the `a2-build` branch, tested, and 
deployed.

## Deployment

This project is deployed on an a2 server manually (right now).

## Contributing

If you would like to contribute to the appendTo implementation **please contact 
Ryan Conaway** (and you can join the #griffith Slack channel).

Also, please make sure you adhere to the [branching](#Branching) strategy above!

### Contributors

* Ryan Conaway
* Trevan Hetzel
* Aaron Bushnell
* Jordan Kasper

-----

# Telescope

Telescope is an open-source, real-time social news site built with [Meteor](http://meteor.com)

**Note:** Telescope is beta software. Most of it should work but it's still a little unpolished and you'll probably find some bugs. Use at your own risk :)

# Learn More
- [Telescope Site](http://telesc.pe)
- [Telescope Demo](http://demo.telesc.pe)
- [Telescope Meta](http://meta.telesc.pe/) – Discussions about Telescope
- [Telescope Wiki](https://github.com/SachaG/Telescope/wiki)

# License
- Telescope is distributed under the [MIT License](http://opensource.org/licenses/MIT)

# Features
- Real-time (of course!)
- Password-based and/or Twitter auth
- Notifications
- Mobile-ready & responsive
- Invite-only access for reading and/or posting
- Markdown support
- Day by day view

# Installation
- Install [Meteor](http://meteor.com)
- Install [Meteorite](https://github.com/oortcloud/meteorite/)
- Download or clone Telescope into /some/path
- cd /some/path
- Run `mrt`

# Developing on Nitrous.IO

Start hacking on this app on
[Nitrous.IO](https://www.nitrous.io/?utm_source=github.com&utm_campaign=Telescope&utm_medium=hackonnitrous)
in seconds:

[![Hack TelescopeJS/Telescope on Nitrous.IO](https://d3o0mnbgv6k92a.cloudfront.net/assets/hack-l-v1-3cc067e71372f6045e1949af9d96095b.png)](https://www.nitrous.io/hack_button?source=embed&runtime=nodejs&repo=TelescopeJS%2FTelescope&file_to_open=README.nitrous.md)

# Hosting Telescope

I recommend using either Meteor's own free hosting service, or checking out [Modulus](http://modulus.io/). 

# First Run
- Fill in your Twitter keys (by clicking on "Sign Up/Sign in" in your Telescope top bar)
- The first user account created will automatically be made admin
- Check out the settings page and fill out basic things like the site's name

# Local Variables
Meteor uses local environment variables for a few things, such as configuring email. While some platforms (like Modulus) make it easy to configure them from their web dashboard, on a local dev environment the best way is to set up an alias for the `mrt` command. 
For example, to configure Meteor to use Mailgun for email, in your `.bash_profile` file just add:
`alias m='MAIL_URL=smtp://username:password@smtp.mailgun.org:587/ mrt'`

This can also be useful for starting Meteor on a specific port:
`alias m4='MAIL_URL=smtp://username:password@smtp.mailgun.org:587/ mrt --port 4000'`
