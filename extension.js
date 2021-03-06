(function () {

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "BotMagia",
        language: "portuguese",
        chatLink: "https://rawgit.com/SlayerDamianBot/basicBot-customization/master/lang/pt.json",
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 8,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["tema", "Essa música não condiz com o tema da sala. "],
            ["op", "This song is on the OP list. "],
            ["bl", "Essa música está em nossa Lista de Músicas Tocadas Excessivamente"]
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["som", "A música que você tocou era de má qualidade ou não tinha som nenhum. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["unavailable", "The song you played was not available for some users. "],
            ["indisponivel", "A música que você tocou não estava disponível para alguns usuários. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 6,
        motd: "!roulette",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: "https://rawgit.com/SlayerDamianBot/basicBot-customization/master/blacklists/ExampleOPlist.json",
        rulesLink: "http://goo.gl/pDi7H1",
        themeLink: null,
        fbLink: "https://www.fb.com/groups/PopMusicWorld/",
        youtubeLink: null,
        website: null,
        intervalMessages: [":santa: Feliz Natal! how how how how :christmas_tree:"],
        messageInterval: 1,
        songstats: true,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/SlayerDamianBot/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/SlayerDamianBot/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/SlayerDamianBot/Fun-Bot/master/Bot/Fun.js', extend);
    
 
}).call(this);
