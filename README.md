# PinBot
~~A random dumb bot that you DM it, and it adds your message to the pins of a channel~~

Actually, its just a bot where if you DM it, it forwards the message to a channel. This is maybe good for like archiving stuff? Idk we don't really use the bot any more




# Docker instructions

 * Download the repo onto your machine
 * Change the config to include your token + channelID
 * Run `docker build -t your-app-name .`
 * Run `docker run your-app-name`

If you wanna run the image on another machine, build the image on your main machine first then run `docker save your-app-name > ~/filename.tar` then on your other machine run `docker load < ~/filename.tar` from there you can start the container like normal. (Just, don't publish your image)
