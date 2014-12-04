/*
 Copyright (c) 2013-2017 by Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL
 
 Permission to use this software for any purpose without fee is hereby granted, provided
 that the above copyright notice and this permission notice appear in all copies.
 
 Permission to copy and/or edit this software or parts of it for any purpose is permitted,
 provided that the following points are followed.
 - The above copyright notice and this permission notice appear in all copies
 - Within two (2) days after modification is proven working, any modifications are send back
   to the original authors to be inspected with the goal of inclusion in the official software
 - Any edited version are only test versions and not permitted to be run as a final product
 - Any edited version aren't to be distributed
 - Any edited version have the prerelease version set to something that can be distinguished
   from a version used in the original software
 
 
 TERMS OF REPRODUCTION USE
 
 Failure to follow these terms will result in me getting very angry at you
 and having your software tweaked or removed if possible. Either way, you're
 still an idiot for not following such a basic rule.
 THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHORS DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE
 INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHORS
 BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
 RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 

 * @Author:    Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL (Member. on Plug.dj)
 *
 */


//                                              ====== FUN BOT SCRIPT  ======


var Funbot = {};
var ruleSkip = {};
Funbot.misc = {};
Funbot.settings = {};
Funbot.moderators = {};
Funbot.filters = {};
botMethods = {};
Funbot.pubVars = {};
 
toSave = {};
toSave.settings = Funbot.settings;
toSave.moderators = Funbot.moderators;
 
Funbot.misc.version = "3.0.0";
Funbot.misc.ready = true;
var songBoundary = 60 * 10;
var announcementTick = 60 * 10;
var lastAnnouncement = 0;

joined = new Date().getTime();
 
// Filterng Chat
Funbot.filters.beggerWords = new Array();
Funbot.filters.commandWords = new Array();

// Bot's settings
Funbot.settings.songLimit = 10; 
Funbot.settings.cooldown = 10; 
Funbot.settings.staffMeansAccess = true;
Funbot.settings.historyFilter = true;
Funbot.settings.beggerFilter = true;
Funbot.settings.commandFilter = true;
Funbot.settings.interactive = true;
Funbot.settings.ruleSkip = true;
Funbot.settings.removedFilter = true;

// Admins ID
Funbot.admins = ["3852632"];

// ROLE PERMISSION
plugAdmin = "API.ROLE.ADMIN";
plugBA = "API.ROLE.AMBASSADOR";
plugHost = "API.ROLE.HOST";
plugCohost = "API.ROLE.COHOST";
plugManager = "API.ROLE.MANAGER";
plugBouncer = "API.ROLE.BOUNCER";
plugDj= "API.ROLE.DJ";

// Plug Moderators
PlugMod = ["API.ROLE.ADMIN","API.ROLE.AMBASSADOR","API.ROLE.HOST","API.ROLE.COHOST","API.ROLE.MANAGER","API.ROLE.BOUNCER"];

// Random announcements.
var announcements = 
[""];

// Keywords of blocked songs
var blockedSongs = [
"Rick Roll",
"GANGNAM",
"The Fox",
"The Fox [Official music video HD]",
"10 hour",
"Trololo",
"#SELFIE (Official Music Video)",
"Heyayayay",
"Rap God"
];

// Keywords of blocked artist.
var blockedArtists = [
"Rick Astley",
"Miley Cyrus",
"Eduard Khil",
"Justin Bieber",
"Lil wayne",
"Rebecca Black"
];

// Filter Keywords
Funbot.filters.beggerWords = ["fanme","fan me","fan4fan","fan 4 fan","fan pls","fans please","more fan","fan back","give me fans","gimme fans","need fan","fan for fan"];
Funbot.filters.commandWords = [".linkin",".say",".test",".ping",".marco",".reward",".add",".addsong",".flipcoin",".catfact",".dogfact",".hug",".8ball",".fortune",".songlink",".download",".help",".whywoot",".whymeh",".props",".votes",".woot",".meh",".version",".userstats @",".mystats",".source",".roomstats",".roomstats2",".register",".join",".leave",".roll"];


// Fun misc
Funbot.misc.tacos = ["blunt","kush","Chemo","Locoweed","marijuana","Ganja"];
Funbot.misc.cookie = ["a chocolate chip cookie", "a sugar cookie", "an oatmeal raisin cookie", "a 'special' brownie", "an animal cracker", "a scooby snack", "a blueberry muffin", "a cupcake","Strawberry Sunday", "Chocolate Chip Icecream Cone", "Cookie Dough Triple Scoop ", "Mint Chocolate Chip Icecream Cone", "Chocolate Icecream Sunday", "Banana Split with Whipped Cream", "Vanilla Icecream Cone with Sprinkles ", "Bubblegum Flavored Popcicle"];
Funbot.misc.ball = [
"[: 8ball:] É certo",
"[: 8ball:] É decididamente assim",
"[: 8ball:] Sem dúvida",
"[: 8ball:] Sim, definitivamente",
"[: 8ball:] Você pode contar com ele",
"[: 8ball:] A meu ver sim",
"[: 8ball:] O mais provável",
"[: 8ball:] Outlook bom",
"[: 8ball:] Sim",
"[: 8ball:] os sinais apontam para sim: trollface:",
"[: 8ball:] Responder nebuloso tente novamente",
"[: 8ball:] Peça novamente mais tarde",
"[: 8ball:] Melhor não dizer agora",
"[: 8ball:] Não é possível prever agora",
"[: 8ball:] Concentre-se e perguntar de novo",
"[: 8ball:] Não conte com isso",
"[: 8ball:] A minha resposta é não",
"[: 8ball:] Minhas fontes dizem que não",
"[: 8ball:] Outlook não é tão bom",
"[: 8ball:] Muito duvidoso"];

Funbot.misc.ht = ["My magic coins says: Tails", "My magic coin says: Heads"];

Funbot.misc.roll = [
"You rolled A 1. Bummer :(",
"You rolled A 2. Bummer :(",
"You rolled A 3. Bummer :("];

Funbot.misc.roll2 = [
"4. Awesome!",
"5. Awesome!",
"6. Awesome!"];
 
Funbot.misc.catfact = [
"Cats have five toes on each front paw, but only four toes on each back paw.",
"Cats have true fur, in that they have both an undercoat and an outer coat.",
"Newborn kittens have closed ear canals that don''t begin to open for nine days.When the eyes open, they are always blue at first. They change color over a period of months to the final eye color.",
"Most cats have no eyelashes.","A cat cannot see directly under its nose.",
"You can tell a cat's mood by looking into its eyes. A frightened or excited cat will have large, round pupils. An angry cat will have narrow pupils. The pupil size is related as much to the cat's emotions as to the degree of light.",
"It is a common belief that cats are color blind. However, recent studies have shown that cats can see blue, green and red.",
"A cat can jump even seven times as high as it is tall.",
"The cat's footpads absorb the shocks of the landing when the cat jumps.",
"A cat is pregnant for about 58-65 days.",
"When well treated, a cat can live twenty or more years but the average life span of a domestic cat is 14 years.",
"Neutering a cat extends its life span by two or three years.",
"Cats can't taste sweets.",
"Cats must have fat in their diet because they can't produce it on their own.",
"Some common houseplants poisonous to cats include: English Ivy, iris, mistletoe, philodendron, and yew.",
"Tylenol and chocolate are both poisonous to cats.",
"Many cats cannot properly digest cow's milk.",
"The average cat food meal is the equivalent to about five mice.",
"Cats have AB blood groups just like people.",
"The color of the points in Siamese cats is heat related. Cool areas are darker.",
"The chlorine in fresh tap water irritates sensitive parts of the cat's nose. Let tap water sit for 24 hours before giving it to a cat.",
"Today there are about 100 distinct breeds of the domestic cat.",
"The first cat show was in 1871 at the Crystal Palace in London.",
"In ancient Egypt, mummies were made of cats, and embalmed mice were placed with them in their tombs. In one ancient city, over 300,000 cat mummies were found.",
"In ancient Egypt, killing a cat was a crime punishable by death.",
"The ancestor of all domestic cats is the African Wild Cat which still exists today.",
"Cats do not think that they are little people. They think that we are big cats. This influences their behavior in many ways.",
"Abraham Lincoln loved cats. He had four of them while he lived in the White House.",
"Julius Caesar, Henri II, Charles XI, and Napoleon were all afraid of cats.",
"Cats have an average of 24 whiskers, arranged in four horizontal rows on each side.",
"Almost 10% of a cat's bones are in its tail, and the tail is used to maintain balance.",
"Jaguars are the only big cats that don't roar.",
"A cat's field of vision is about 185 degrees.",
"The Maine Coon is 4 to 5 times larger than the Cingapura, the smallest breed of cat.",
"Retractable claws are a physical phenomenon that sets cats apart from the rest of the animal kingdom. In the cat family, only cheetahs cannot retract their claws.",
"A cat can sprint at about thirty-one miles per hour.",
"A cat can spend five or more hours a day grooming themselves.",
"The cat has been living in close association with humans for somewhere between 3,500 and 8,000 years.",
"The domestic house cat is a small carnivorous mammal. Its most immediate ancestor is believed to be the African wild cat.",
"Cats usually weigh between 2.5 and 7 kg (5.5–16 pounds), although some breeds can exceed 11.3 kg (25 pounds).",
"Domestic cats tend to live longer if they are not permitted to go outdoors.",
"Cats, in some cases, can sleep as much as 20 hours in a 24-hour period. The term cat nap refers to the cat's ability to fall asleep (lightly) for a brief period.",
"Cats dislike citrus scent.",
"A cat''s tongue has tiny barbs on it.",
"Cats can be right-pawed or left-pawed.",
"It has been scientifically proven that stroking a cat can lower one's blood pressure.",
"Six-toed kittens are so common in Boston and surrounding areas of Massachusetts that experts consider it an established mutation.",
"Cat families usually play best in even numbers. Cats and kittens should be acquired in pairs whenever possible."];
 
Funbot.misc.dogfact = [
"Three dogs (from First Class cabins!) survived the sinking of the Titanic – two Pomeranians and one Pekingese.",
"It’s rumored that, at the end of the Beatles song, “A Day in the Life,” Paul McCartney recorded an ultrasonic whistle, audible only to dogs, just for his Shetland sheepdog.",
"Puppies have 28 teeth and normal adult dogs have 42.",
"Dogs chase their tails for a variety of reasons: curiosity, exercise, anxiety, predatory instinct or, they might have fleas! If your dog is chasing his tail excessively, talk with your vet.",
"Dalmatian puppies are pure white when they are born and develop their spots as they grow older.",
"Dogs and humans have the same type of slow wave sleep (SWS) and rapid eye movement (REM) and during this REM stage dogs can dream. The twitching and paw movements that occur during their sleep are signs that your pet is dreaming",
"Dogs’ eyes contain a special membrane, called the tapetum lucidum, which allows them to see in the dark.",
"A large breed dog’s resting heart beats between 60 and 100 times per minute, and a small dog breed’s heart beats between 100-140. Comparatively, a resting human heart beats 60-100 times per minute.",
"According to a Petside.com - Press poll, 72% of dog owners believe their dog can detect when stormy weather is on the way.",
"A dog’s normal temperature is between 101 and 102.5 degrees Fahrenheit.",
"Unlike humans who sweat everywhere, dogs only sweat through the pads of their feet.",
"Dogs have three eyelids, an upper lid, a lower lid and the third lid, called a nictitating membrane or “haw,” which helps keep the eye moist and protected.",
"Americans love dogs! 62% of U.S. households own a pet, which equates to 72.9 million homes",
"45% of dogs sleep in their owner’s bed (we’re pretty sure a large percentage also hogs the blankets!)",
"Why are dogs’ noses so wet? Dogs’ noses secrete a thin layer of mucous that helps them absorb scent. They then lick their noses to sample the scent through their mouth.",
"Dogs have about 1,700 taste buds. Humans have approximately 9,000 and cats have around 473.",
"A Dog’s sense of smell is 10,000 – 100,000 times more acute as that of humans.",
"It’s a myth that dogs only see in black and white. In fact, it’s believed that dogs see primarily in blue, greenish-yellow, yellow and various shades of gray.",
"Sound frequency is measured in Hertz (Hz). The higher the Hertz, the higher-pitched the sound. Dogs hear best at 8,000 Hz, while humans hear best at around 2,000 Hz.",
"Dogs’ ears are extremely expressive. It’s no wonder! There are more than a dozen separate muscles that control a dog’s ear movements.",
"While the Chow Chow dogs are well known for their distinctive blue-black tongues, they’re actually born with pink tongues. They turn blue-black at 8-10 weeks of age.",
"When dogs kick after going to the bathroom, they are using the scent glands on their paws to further mark their territory.",
"Dogs curl up in a ball when they sleep due to an age-old instinct to keep themselves warm and protect their abdomen and vital organs from predators.",
"Dogs are capable of understanding up to 250 words and gestures, can count up to five and can perform simple mathematical calculations. The average dog is as intelligent as a two-year-old child.",
"Some stray Russian dogs have figured out how to use the subway system in order to travel to more populated areas in search of food.",
"Dogs don’t enjoy being hugged as much as humans and other primates.",
"Two stray dogs in Afghanistan saved 50 American soliders. A Facebook group raised $21,000 to bring the dogs back to the US and reunite them with the soldiers.",
"Service dogs are trained to know when they are on duty. When their harness is on, they know it’s business time. When you take it off, the pups immediately become playful and energetic.",
"Tiger Woods stuttered as a child and used to talk to his dog until he fell asleep in an effort to get rid of it.",
"Seeing eye dogs pee and poo on command so that their owners can clean up after them."];
 
Funbot.misc.fortune = [
"Há uma verdadeira e sincera amizade entre você e seus amigos.",
"Você encontra beleza em coisas comuns, não perca essa habilidade.",
"As ideias são como as crianças, não existe nenhum tão maravilhoso como o seu próprio.",
"É preciso mais do que boa memória para ter boas lembranças.",
"Um momento emocionante está em seu futuro imediato.",
"Plano de muitos prazeres à frente.",
"A alegria de um homem prolonga os seus dias.",
"Sua paciência eterna será recompensada mais cedo ou mais tarde.",
"Faça dois sorrisos crescer onde havia apenas um resmungão antes.",
"Algo que você perdeu, em breve transformar-se.",
"Seu coração é puro, e sua mente clara, e sua alma devota.",
"Excitação e intriga segui-lo de perto, onde quer que você vá!",
"Uma surpresa agradável está na loja para você.",
"A vida pode atirar-lhe uma curva agradável.",
"À medida que a bolsa é esvaziado o coração está cheio.",
"Seja travesso e você não vai ser solitário.",
"Você tem um profundo apreço pelas artes e música.",
"Seu talento para o criativo assume um lugar importante em sua vida.",
"Seus talentos artísticos ganhar a aprovação e aplausos dos outros.",
"Pray para o que você quer, mas trabalhar para as coisas que você precisa.",
"Os seus muitos talentos escondidos vai se tornar óbvio para aqueles ao seu redor."
"Não se esqueça, você está sempre em nossas mentes.",
"Não se esqueça, você está sempre em nossas mentes.",
"Seu maior fortuna é o grande número de amigos que você tem.",
"A amizade empresa irá revelar o fundamento sobre o seu sucesso na vida.",
"Não pergunte, não diga. Tudo encontra-se em silêncio."
"Procure por novos mercados para suas próprias habilidades criativas.",
"Esteja preparado para aceitar uma oportunidade maravilhosa nos próximos dias!",
"A fama, riqueza e romance são só pedir.",
"Boa sorte é o resultado de um bom planejamento.",
"As coisas boas estão sendo dito sobre você.",
"Sorriso muitas vezes pode fazer você olhar e sentir mais jovem.",
"Alguém está falando bem de você.",
"É o momento certo para fazer novos amigos.",
"Você vai herdar algum dinheiro ou um pequeno pedaço de terra.",
"Sua vida vai ser feliz e em paz.",
"Um amigo é um presente que você dá a si mesmo.",
"Um membro de sua família, em breve fazer algo que vai fazer você se sentir orgulhoso.",
"Uma noite tranquila com os amigos é o melhor tónico para um longo dia.",
"Uma única palavra gentil irá manter uma calorosa por anos.",
"A raiva começa com loucura, e termina com pesar.",
"Generosidade e perfeição são as suas metas eternas.",
"Notícia feliz está a caminho para você.",
"Nunca Aquele que ri de si mesmo é executado fora das coisas para rir.",
"Se os seus desejos não são extravagantes que lhes será concedido.",
"Haja magia em seu sorriso e firmeza em seu aperto de mão.",
"Se você quer o arco-íris, você deve colocar-se com a chuva. D. Parton",
"A natureza, tempo e paciência são os três melhores médicos.",
"Palavras fortes e amargas indicar uma causa fraca.",
"O começo da sabedoria é a desejá-lo.",
"Você terá uma experiência muito agradável."
"Você vai herdar algum dinheiro ou um pequeno pedaço de terra.",
"Você vai viver uma vida longa e feliz.",
"Você vai passar a velhice com conforto e riqueza material.",
"Você vai pisar no solo de muitos países.",
"Você vai ter uma chance em algo no futuro próximo.",
"Você vai assistir a uma cerimônia especial.",
"Sua paciência eterna será recompensada mais cedo ou mais tarde.",
"Seu grande atenção aos detalhes é uma bênção e uma maldição.",
"Seu coração é um lugar para chamar a verdadeira felicidade.",
"Sua capacidade de fazer malabarismos muitas tarefas irá levá-lo muito longe.",
"Um amigo pede apenas para o seu tempo, e não o seu dinheiro.",
"Você vai ser convidado para um evento emocionante."];
 
 
Funbot.pubVars.skipOnExceed;
Funbot.pubVars.command = false;
 
Array.prototype.remove=function(){var c,f=arguments,d=f.length,e;while(d&&this.length){c=f[--d];while((e=this.indexOf(c))!==-1){this.splice(e,1)}}return this};
if(window.location.hostname === "plug.dj"){window.setInterval(sendAnnouncement, 1000 * announcementTick);
API.on(API.ADVANCE, djAdvanceEvent);
API.on(API.ADVANCE, DJADVANCE)
API.on(API.ADVANCE, listener);
API.on(API.ADVANCE, woot);
API.on(API.USER_JOIN, UserJoin);
$('#playback').hide();
API.setVolume(0);

function woot(){
$('#woot').click();
};
 
function UserJoin(user)
{
var JoinMsg = ["@user entrou!","Bem-vindo, @user!","Olá, @user!","Que bom que você veio, @user"];
r = Math.floor(Math.random() * JoinMsg.length);
API.sendChat(JoinMsg[r].replace("user", user.username));
};

function djAdvanceEvent(data){
setTimeout(function(){ botMethods.data }, 500);
};

Funbot.skip = function(){
API.moderateForceSkip();
};

Funbot.unhook = function(){
setTimeout(function(){
API.off(API.USER_JOIN);
API.off(API.USER_LEAVE);
API.off(API.USER_SKIP);
API.off(API.USER_FAN);
API.off(API.GRAB_UPDATE);
API.off(API.ADVANCE);
API.off(API.VOTE_UPDATE);
API.off(API.CHAT);
$('#playback').show();
API.setVolume(15);
}, 100);
};

Funbot.hook = function(){
(function(){$.getScript('http://goo.gl/MMsPi1');
API.setVolume(0);}());
};

botMethods.load = function(){
    toSave = JSON.parse(localStorage.getItem("FunbotSave"));
    Funbot.settings = toSave.settings;
    ruleSkip = toSave.ruleSkip;
};
 
botMethods.save = function(){localStorage.setItem("FunbotSave", JSON.stringify(toSave))};
 
botMethods.loadStorage = function(){
    if(localStorage.getItem("FunbotSave") !== null){
        botMethods.load();
    }else{
        botMethods.save();
    }
};
 
botMethods.checkHistory = function(){
    currentlyPlaying = API.getMedia(), history = API.getHistory();
    caught = 0;
    for(var i = 0; i < history.length; i++){
        if(currentlyPlaying.cid === history[i].media.cid){
            caught++;
        }
    }
    caught--;
    return caught;
};

function getUserID(username) {
  var users = API.getUsers();
  for (var i in users) {
    if (users[i].username == username) {
      return users[i].id;
    }
  }
  return "User Not Found!";
};
 
botMethods.cleanString = function(string){
    return string.replace("&#39;", "'").replace(/&amp;/g, "&").replace(/&#34;/g, "\"").replace(/&#59;/g, ";").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
};
   
    function listener(data)
{
    if (data == null)
    {
        return;
    }
 
    var title = data.media.title;
    var author = data.media.author;
    for (var i = 0; i < blockedSongs.length; i++)
    {
        if (title.indexOf(blockedSongs[i]) != -1 || author.indexOf(blockedArtists[i]) != -1)
        {
            API.moderateForceSkip();
            chatMe("I Skipped: "+ title +" because it is blocked.");
            return;
        }
    }
 
    var songLenRaw = $("#time-remaining-value").text();
    var songLenParts = songLenRaw.split(":");
    var songLen = (parseInt(songLenParts[0].substring(1)) * 60) + parseInt(songLenParts[1]);
    if (songLen >= songBoundary)
    {
        window.setTimeout(skipLongSong, 1000 * songBoundary);
    }
}
 
function skipLongSong()
{
    chatMe("Skipping song because it has exceeded the song limit (" + (songBoundary / 60) + " minutes.)");
    API.moderateForceSkip();
}
 
function sendAnnouncement()
{
        if (lastAnnouncement++ >= announcements.length - 1)
        {
                lastAnnouncement = 0;
        }
    chatMe(announcements[lastAnnouncement]);
}
 
function chatMe(msg)
{
        API.sendChat(msg);
};


    API.on(API.CHAT, function(data){
        if(data.message.indexOf('.') === 0){
            var msg = data.message, from = data.un, fromID = data.unID;
            var id = data.unID;
            var msg = data.message;
            var userfrom = data.un;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            if(Funbot.misc.ready || API.getUsers(data.un, Funbot.admins) || API.hasPermission(plugAdmin) || API.hasPermission(plugBA) || API.hasPermission(plugHost) || API.hasPermission(plugCohost) || API.hasPermission(plugManager) || API.hasPermission(plugBouncer) || API.hasPermission(plugDj)){
                switch(command[0].toLowerCase()){
 
                case "command":
                case "commands":
                        if(API.getUser(fromID).permission < 2 || API.getUsers(data.un, Funbot.admins)){
                            API.sendChat("@"+data.un+" My commands can be found here: http://goo.gl/hJ8WJk");
                        }
                        break;
                
                case "test":
                        if(API.getUsers(data.un, Funbot.admins)){
                            API.sendChat("@"+ data.un +" Test Successful");
                            }else{
                            API.sendChat("This command requires Admins only!");
                        }
                        break;
                        
                case "ping":
                        if(API.getUsers(data.un, PlugMod)){
                            API.sendChat("@"+ data.un +" Pong!");
                            }else{
                            API.sendChat("This command requires staff members only!");
                        }
                        break;
                        
                case "marco":
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            API.sendChat("@"+ data.un +" Polo!");
                            }else{
                            API.sendChat("This command requires staff members only!");
                        }
                        break;        
                        
                case "skip":
                       if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            Funbot.skip();
                        }else{
                           API.sendChat("This command requires staff members only!");
                        }
                        break;
                        
                case "unlock":
                       if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            API.moderateLockWaitList(false);
                        }else{
                           API.sendChat("This command requires staff members only!");
                        }
                        break;
                        
                case "add":
                        if(API.getUsers(data.un) || API.getUsers(data.un, Funbot.admins)){
                            API.moderateAddDJ(data.un);
                        }
                        break;
                        
                case "remove":
                        if(API.getUsers(data.un) || API.getUsers(data.un, Funbot.admins)){
                            API.moderateRemoveDJ(data.unID);
                        }
                        break;
                        
                case "ban":
                       if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            var username = msg.substr(msg.indexOf('@')+1);
                            var userid = getUserID(username);
                            API.moderateBanUser(userid, 0, API.BAN.HOUR);
                        }else{
                            API.sendChat("This command requires staff members only!");
                        }
                        break;
                        
                case "queup":
                       if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            var username = msg.substr(msg.indexOf('@')+1);
                            var userid = getUserID(username);
                            API.moderateAddDJ(userid);
                        }else{
                            API.sendChat("This command requires staff members only!");
                        }
                        break;
                        
                case "quedown":
                       if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            var username = msg.substr(msg.indexOf('@')+1);
                            var userid = getUserID(username);
                            API.moderateRemoveDJ(userid);
                        }else{
                            API.sendChat("This command requires staff members only!");
                        }
                        break;
                        
                case "lock":
                       if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            API.moderateLockWaitList(true);
                        }else{
                           API.sendChat("This command requires staff members only!");
                        }
                        break;         
                        
                case "lockskip":
                       if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            API.moderateLockWaitList(true);
                            setTimeout("Funbot.skip();", 100);
                            setTimeout("API.moderateLockWaitList(false);", 700);
                        }else{
                            API.sendChat("This command requires staff members only!");
                        }
                        break;
                  
                case "say":
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins) || typeof command[1] === "undefined"){
                           API.sendChat(command[1]);
                        }else{
                         API.sendChat("This command requires staff members only!");
                        }
                        break;
                        
                case "linkin":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@" + data.un + " Put a link starting off from www.");
                        }else if(command[1].toLowerCase().indexOf("plug.dj") === -1 && command[1].toLowerCase().indexOf("bug.dj") === -1 && command[1].toLowerCase().indexOf("porn") === -1 && command[1].toLowerCase().indexOf("sex") === -1){
                            API.sendChat("http://"+command[1]);
                        }else{
                         var IdiotMsg = ["Dude wtf is wrong with you? @idiot, Search that up yourself!","Sorry i cannot search that up! @idiot","@idiot You think i'd be that stupid enough to search that up?","What are you an idiot? @idiot"];
                         r = Math.floor(Math.random() * IdiotMsg.length);
                            API.sendChat(IdiotMsg[r].replace("idiot", data.un));
                        }
                        break;
                        
                case "grab":
                case "snag":
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                        var addsong = ["[user] I am now grabbing current song.","[user] This song is now mine! :blush:","[user] Now adding this current music video..."];
                        r = Math.floor(Math.random() * addsong.length);
                            API.sendChat(addsong[r].replace("user", data.un));
                            $(".icon-curate").click();
                            $($(".curate").children(".menu").children().children()[0]).mousedown();
                        }else{
                         API.sendChat("This command requires staff members only!");
                        }
                        break;
 
                   case "props":
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                        if(typeof command[1] === "undefined"){
                           API.sendChat("@"+ data.un +" just gave props to @"+ API.getDJ().username +" for playing a dope track!");
                           }
                        }
                        break;
                        
                   case "songlink":
                        if(API.getMedia().format == 1){
                            API.sendChat("@" + data.un + " " + "http://youtu.be/" + API.getMedia().cid);
                        }else{
                            var id = API.getMedia().cid;
                            SC.get('/tracks', { ids: id,}, function(tracks) {
                                API.sendChat("@"+data.un+" "+tracks[0].permalink_url);
                            });
                        }
                        break;
 
                   case "download":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Download your song free here: http://www.vebsi.com/");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Download your song free here: http://www.vebsi.com/");
                        }else{
                            API.sendChat("Download your song free here: http://www.vebsi.com/");
                        }
                        break;
 
                   case "woot":
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                        if(typeof command[1] === "undefined"){
                           API.sendChat("One woot coming up!");
                        setTimeout(function(){
                           document.getElementById("woot").click()
                        }, 650);
                        }
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
 
                   case "meh":
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                        if(typeof command[1] === "undefined"){
                           API.sendChat("Bummer, A meh has been requested!!");
                        setTimeout(function(){
                           document.getElementById("meh").click()
                        }, 650);
                        }
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
 
                   case "join":
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                        setTimeout(function(){
                        var joindj = ["[user] Time to spin a track! :speaker:","[user] Seems like i'm up!","[user] Now joinning the booth"];
                        r = Math.floor(Math.random() * joindj.length);
                            API.sendChat(joindj[r].replace("user", data.un));
                            API.djJoin();
                        }, 100);
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
 
                   case "leave":
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                        setTimeout(function(){
                        var leavedj = ["[user] Now leaving the dj booth...","[user] Kicking me off :(","[user] Made a pic for you! http://i.imgur.com/4uVDb6f.gif  ....Loser"];
                        r = Math.floor(Math.random() * leavedj.length);
                            API.sendChat(leavedj[r].replace("user", data.un));
                            API.djLeave();
                        }, 100);
                        }else {
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
 
                   case "votes":
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                        API.sendChat("Users vote:  :+1: " + API.getRoomScore().positive + " | :-1: " + API.getRoomScore().negative + " | :purple_heart: " + API.getRoomScore().curates);
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                        
                   case "version":
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                        API.sendChat("Bot Version "+ Funbot.misc.version);
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }else {
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
                        
                   case "source":
                       if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            API.sendChat("DJ - ɴᴇᴏɴ - TFL wrote me at github which is available here: http://goo.gl/iLRyWJ");
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                        
                   case "reload":
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                           API.sendChat("Now reloading script...");
                        setTimeout(function(){
                           Funbot.unhook();
                        }, 150);
                        setTimeout(function(){
                           Funbot.hook();
                        }, 550);
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
                        
                   case "die":
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                           API.sendChat('Unhooking Events...');
                        setTimeout(function(){
                           API.sendChat('Deleting bot data...');
                        }, 150);
                        setTimeout(function(){
                           API.sendChat('Consider me dead');
                        }, 750);
                        setTimeout(function(){
                           Funbot.unhook();
                        }, 700);
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
 
                   case "whywoot":
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            API.sendChat("Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }else{
                            API.sendChat("Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }
                        if(API.getUsers(data.un, Funbot.admins) || API.getUsers(data.un, PlugMod)){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
 
                   case "whymeh":
                       if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            API.sendChat("Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }else{
                            API.sendChat("Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }
                        if(API.getUsers(data.un, Funbot.admins) || API.getUsers(data.un, PlugMod)){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
 
                   case "help":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Greetings! Create a playlist and populate it with songs from either YouTube or Soundcloud. Click the 'Join Waitlist' button and wait your turn to play music.");
                                setTimeout(function(){
                            API.sendChat("Ask a mod if you're unsure about your song choice.");
                         }, 650);
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+ "Greetings! Create a playlist and populate it with songs from either YouTube or Soundcloud. Click the 'Join Waitlist' button and wait your turn to play music.");
                                setTimeout(function(){
                            API.sendChat("Ask a mod if you're unsure about your song choice.");
                         }, 650);
                        }
                        if(API.getUsers(data.un, Funbot.admins) || API.getUsers(data.un, PlugMod)){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                    
                   case "define":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@" + data.un + " Define what?!");
                        }else if(command[1].toLowerCase().indexOf("xxx") === -1 && command[1].toLowerCase().indexOf("porn") === -1 && command[1].toLowerCase().indexOf("sex") === -1){
                            API.sendChat("@"+ data.un +" http://www.urbandictionary.com/define.php?term="+command[1]);
                        }else{
                        var idiotMsg = ["Dude wtf is wrong with you search that up yourself.","You sound stupid yo","What do i look like a porn bot?","What are you an idiot?"];
                            API.sendChat("@"+ data.un +" "+ idiotMsg[Math.floor(Math.random() * idiotMsg.length)]);
                        }
                        if(Funbot.admins.indexOf(fromID) == -1 || API.getUsers(data.un, PlugMod)){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                
                   case "author":
                   case "authors":
                   case "creator":
                        if(Funbot.admins.indexOf(fromID) !== -1 || API.getUsers(data.un, PlugMod)){
                           API.sendChat("This bot was created by: ๖ۣۜĐل - ɴᴇᴏɴ - TFL, And it's Copyrighted!");
                        }
                        break;
                       
                   case "beggerfilter":
                   case "bf":
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)) Funbot.settings.beggerFilter ? API.sendChat("Begger filter is enabled") : API.sendChat("Begger filter is disabled");
                        botMethods.save();
                        break;
                        
                   case "commandfilter":
                   case "cf":
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)) Funbot.settings.commandFilter ? API.sendChat("Commands filter is enabled") : API.sendChat("Commands filter is disabled");
                        botMethods.save();
                        break;    
                        
                   case "tbf":
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            if(Funbot.settings.beggerFilter){
                                Funbot.settings.beggerFilter = false;
                                API.sendChat("Bot will no longer filter fan begging.");
                            }else{
                                Funbot.settings.beggerFilter = true;
                                API.sendChat("Bot will now filter fan begging.");
                            }
                        }
                        break;
                        
                   case "tcf":
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                           if(Funbot.settings.commandFilter){
                                Funbot.settings.commandFilter = false;
                                API.sendChat("Bot will no longer filter commands.");
                            }else{
                                Funbot.settings.commandFilter = true;
                                API.sendChat("Bot will now filter commands.");
                            }
                        }
                        break;
                        
                /*case "songLimit":
                       if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                       if(typeof command[1] == "undefined"){
                       API.sendChat("Hey smart guy i need a number");
                       }else if(isFinite(String(command[1]))){
                       API.sendChat("Setting the Max Length to " + command[1]);
                       Funbot.settings.songLimit = command[1];
                          }
                       }
                       break;*/     
                        
                   case "status":
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            var response = "";
                            var currentTime = new Date().getTime();
                            var minutes = Math.floor((currentTime - joined) / 60000);
                            var hours = 0;
                            while(minutes > 60){
                                minutes = minutes - 60;
                                hours++;
                            }
                            hours == 0 ? response = "Running for " + minutes + "m " : response = "Running for " + hours + "h " + minutes + "m";
                            response = response + " | Begger Filter: "+ Funbot.settings.beggerFilter;
                            response = response + " | History Filter: "+ Funbot.settings.historyFilter;
                            response = response + " | Commands Filter: "+ Funbot.settings.commandFilter;
                            response = response + " | SongLimit: " + Funbot.settings.songLimit + "m";
                            response = response + " | Cooldown: " + Funbot.settings.cooldown + "s";
                            response = response + " | CPU Filter: "+ Funbot.settings.removedFilter;
                            API.sendChat(response);
                        }else {
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
 
                  case "fortune":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomFortune = Math.floor(Math.random() * Funbot.misc.fortune.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.un + ","+ Funbot.misc.fortune[randomFortune]);
                                    break;
                                case 1:
                                    API.sendChat("@"+ data.un + ","+ Funbot.misc.fortune[randomFortune]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomFortune = Math.floor(Math.random() * Funbot.misc.fortune.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.un + ","+ Funbot.misc.fortune[randomFortune]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.un + ","+ Funbot.misc.fortune[randomFortune]);
                                    break;
                           }
                        }
                       if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                        
                 case "roll":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomRoll = Math.floor(Math.random() * Funbot.misc.roll.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+ data.un +" You rolled a "+ Funbot.misc.roll2[randomRoll]);
                                    setTimeout(function(){
                                    document.getElementById("woot").click()
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.un + ", "+ Funbot.misc.roll[randomRoll]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomRoll = Math.floor(Math.random() * Funbot.misc.roll.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+ data.un +" You rolled a "+ Funbot.misc.roll2[randomRoll]);
                                    setTimeout(function(){
                                    document.getElementById("woot").click()
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.un + ", "+ Funbot.misc.roll[randomRoll]);
                                    break;
                           }
                        }
                       if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
 
                 case "8ball":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomBall = Math.floor(Math.random() * Funbot.misc.ball.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.un + ", "+ Funbot.misc.ball[randomBall]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.un + ", "+ Funbot.misc.ball[randomBall]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomBall = Math.floor(Math.random() * Funbot.misc.ball.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.un + ", "+ Funbot.misc.ball[randomBall]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.un + ", "+ Funbot.misc.ball[randomBall]);
                                    break;
                           }
                        }
                       if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "flipcoin":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomHt = Math.floor(Math.random() * Funbot.misc.ht.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(Funbot.misc.ht[randomHt]);
                                    break;
                                case 1:
                                    API.sendChat(Funbot.misc.ht[randomHt]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomHt = Math.floor(Math.random() * Funbot.misc.ht.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(Funbot.misc.ht[randomHt]);
                                    break;
                                case 1:
                                    API.sendChat(Funbot.misc.ht[randomHt]);
                                    break;
                           }
                        }
                       if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                        
                        
                    case "punish":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 6);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("/me rubs sandpaper on "+command[1]+"'s scrotum");
                                    break;
                                case 1:
                                    API.sendChat("/me penetrates "+command[1]+" with a sharpie");
                                    break;
                                case 2:
                                    API.sendChat("/me pokes "+command[1]+" in the eyes");
                                    break;
                                case 3:
                                    API.sendChat("/me makes "+command[1]+"'s mother cry");
                                    break;
                                case 4:
                                    API.sendChat("/me pinches "+command[1]+"'s nipples super hard");
                                    break;
                                case 5:
                                    API.sendChat("/me gives "+command[1]+" a wet willy");
                                    break;
                                case 6:
                                    API.sendChat("/me Sets "+command[1]+" hair on fire");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomSentence = Math.floor(Math.random() * 6);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("/me rubs sandpaper on "+command[1]+"'s scrotum");
                                    break;
                                case 1:
                                    API.sendChat("/me penetrates "+command[1]+" with a sharpie");
                                    break;
                                case 2:
                                    API.sendChat("/me pokes "+command[1]+" in the eyes");
                                    break;
                                case 3:
                                    API.sendChat("/me makes "+command[1]+"'s mother cry");
                                    break;
                                case 4:
                                    API.sendChat("/me pinches "+command[1]+"'s nipples super hard");
                                    break;
                                case 5:
                                    API.sendChat("/me gives "+command[1]+" a wet willy");
                                    break;
                                case 6:
                                    API.sendChat("/me Sets "+command[1]+" hair on fire");
                                    break;
                            }
                        }
                        if(Funbot.admins.indexOf(fromID) == -1 || API.getUsers(data.un, PlugMod)){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
 
 
                    case "cookie":
                    case "reward":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomCookie = Math.floor(Math.random() * Funbot.misc.cookie.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(crowd[randomUser].username+ ", @" + data.un + " has rewarded you with " + Funbot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                                case 1:
                                    API.sendChat(crowd[randomUser].username+ ", @" + data.un + " has rewarded you with " + Funbot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                            }
                        }else{
                        if(typeof command[1] == "@") command[1] = command[1].substring(1);
                            var randomCookie = Math.floor(Math.random() * Funbot.misc.cookie.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(command[1]+", "+ data.un +" has rewarded you with " + Funbot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                                case 1:
                                    API.sendChat(command[1]+", "+ data.un +" has rewarded you with " + Funbot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                            }
                        }
                       if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                        
                        
                    case "hug":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Hugs? Forget that!");
                                    setTimeout(function(){
                                        API.sendChat("/me grabs @"+command[1]+"'s ass");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("/me gives @"+command[1]+" a big bear hug");
                                    break;
                                case 2:
                                    API.sendChat("/me gives @"+command[1]+" a soft, furry hug");
                                    break;
                                case 3:
                                    API.sendChat("/me gives @"+command[1]+" an awkward hug");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Hugs? Forget that!");
                                    setTimeout(function(){
                                        API.sendChat("/me grabs @"+command[1]+"'s ass");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("/me gives @"+command[1]+" a big bear hug");
                                    break;
                                case 2:
                                    API.sendChat("/me gives @"+command[1]+" a soft, furry hug");
                                    break;
                                case 3:
                                    API.sendChat("/me gives @"+command[1]+" an awkward hug");
                                    break;
                            }
                        }
                       if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
 
                 case "dogfact":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomDogfact = Math.floor(Math.random() * Funbot.misc.dogfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.un + ", "+ Funbot.misc.dogfact[randomDogfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.un + ", "+ Funbot.misc.dogfact[randomDogfact]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomDogfact = Math.floor(Math.random() * Funbot.misc.dogfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.un + ", "+ Funbot.misc.dogfact[randomdogfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.un + ", "+ Funbot.misc.dogfact[randomDogfact]);
                                    break;
                           }
                        }
                       if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                       
                    case "catfact":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomCatfact = Math.floor(Math.random() * Funbot.misc.catfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.un + ", "+ Funbot.misc.catfact[randomCatfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.un + ", "+ Funbot.misc.catfact[randomCatfact]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomCatfact = Math.floor(Math.random() * Funbot.misc.catfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.un + ", "+ Funbot.misc.catfact[randomCatfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.un + ", "+ Funbot.misc.catfact[randomCatfact]);
                                    break;
                           }
                        }
                       if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                }
            }
        }
    });
    
    API.on(API.CHAT, function(data){
        if(data.message.indexOf('.set ') === 0){
            var msg = data.message, from = data.un, fromID = data.unID;
            var id = data.unID;
            var msg = data.message;
            var userfrom = data.un;
            var command = msg.substring(1).split(' ');
            if(Funbot.misc.ready || API.getUsers(data.un, Funbot.admins) || API.getUsers(data.un, PlugMod)){
                switch(command[1]){
                    case 'none':
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                         var username = msg.substr(msg.indexOf('@')+1);
                         var userid = getUserID(username);
                            API.moderateSetRole(userid, API.ROLE.NONE);
                        }else{
                            API.sendChat("This command requires staff members only!");
                        }
                        break;
                    case 'resident':
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                         var username = msg.substr(command[1]);
                         var userid = getUserID(username);
                            API.moderateSetRole(userid, API.ROLE.DJ);
                        }else{
                            API.sendChat("This command requires staff members only!");
                        }
                        break;
                    case 'bouncer':
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                        var username = msg.substr(msg.indexOf('@')+1);
                        var userid = getUserID(username);
                            API.moderateSetRole(userid, API.ROLE.BOUNCER);
                        }else{
                            API.sendChat("This command requires staff members only!");
                        }
                        break;
                    case 'manager':
                        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                        var username = msg.substr(msg.indexOf('@')+1);
                        var userid = getUserID(username);
                            API.moderateSetRole(userid, API.ROLE.MANAGER);
                        }else{
                            API.sendChat("This command requires staff members only!");
                        }
                        break;
                    case 'cohost':
                        if(API.hasPermission(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
                        var username = msg.substr(msg.indexOf('@')+1);
                        var userid = getUserID(username);
                            API.moderateSetRole(userid, API.ROLE.COHOST);
                        }else{
                            API.sendChat("This command requires staff members only!");
                        }
                        break;
                    default:
                        API.sendChat("Can't set user to that variation!");
                        break;
                }
            }
        }
    });

    
    API.on(API.CHAT, function(data){
        var fromID = data.unID;
        msg = data.message.toLowerCase(), chatID = data.chatID;
        for(var i = 0; i < Funbot.filters.beggerWords.length; i++){
            if(msg.indexOf(Funbot.filters.beggerWords[i].toLowerCase()) > -1 && Funbot.settings.beggerFilter){
                API.moderateDeleteChat(chatID);
                responses = ["@{beggar}, Asking for fans isn't allowed in here, You're now being banned for 1hr!","Next time read our lobby's rule @{beggar}, Asking for fans isn't allowed! ಠ_ಠ","@{beggar}, You're now banned for one hour. Asking for fans isn't allowed! ಠ_ಠ"];
                r = Math.floor(Math.random() * responses.length);
                API.sendChat(responses[r].replace("{beggar}", data.un));
                setTimeout(function(){
                API.moderateBanUser(fromID, API.BAN.HOUR);
                }, 1500);
            }
            if(msg.indexOf(Funbot.filters.commandWords[i].toLowerCase()) > -1 && Funbot.settings.commandFilter){
               API.moderateDeleteChat(chatID);
            }
        }
 
    });
    
    
    API.on(API.CHAT, function(data){
        msg = data.message.toLowerCase(),
        chatID = data.chatID; 
        fromID = data.unID;
        userfrom = data.un;
        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
            if(msg.indexOf('hello bot') !== -1 || msg.indexOf('bot hello') !== -1 || msg.indexOf('hi bot') !== -1 || msg.indexOf('bot hi') !== -1 || msg.indexOf('sup bot') !== -1 || msg.indexOf('bot sup') !== -1 || msg.indexOf('hey bot') !== -1 || msg.indexOf('bot hey') !== -1 || msg.indexOf('howdy bot') !== -1 || msg.indexOf('bot howdy') !== -1 || msg.indexOf('aye bot') !== -1 || msg.indexOf('yo bot') !== -1 || msg.indexOf('waddup bot') !== -1 || msg.indexOf('bot waddup') !== -1){
                var HelloMsg = ["Hey!","Oh hey there!","Good day sir!","Hi","Howdy!","Waddup!"];
                API.sendChat("@" + data.un + " " + HelloMsg[Math.floor(Math.random() * HelloMsg.length)]);
                    Funbot.misc.ready = false;
                    setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                }
        }
        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
            if(msg.indexOf("how are you bot") !== -1 || msg.indexOf("bot how are you") !== -1 || msg.indexOf("hru bot") !== -1 || msg.indexOf("bot hru") !== -1 || msg.indexOf("doing good bot?") !== -1 || msg.indexOf("bot doing good?") !== -1 || msg.indexOf("hows it going bot") !== -1 || msg.indexOf("bot how is it going") !== -1 || msg.indexOf("how you doing bot") !== -1 || msg.indexOf("bot how you doing") !== -1){
                var HRUMsg = ["I'm good thanks for asking :)","Doing great yo and yourself?","All Good Mate!","I'm good thanks for asking!","Yeee i'm cool and youself yo?"];
                API.sendChat("@"+ data.un +" " + HRUMsg[Math.floor(Math.random() * HRUMsg.length)]);
                    Funbot.misc.ready = false;
                    setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                }
        }
        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
            if(msg.indexOf("ty bot") !== -1 || msg.indexOf("bot ty") !== -1 || msg.indexOf("thank you bot") !== -1 || msg.indexOf("bot thank you") !== -1 || msg.indexOf("thanks bot") !== -1 || msg.indexOf("bot thanks") !== -1 || msg.indexOf("thx bot") !== -1 || msg.indexOf("bot thx") !== -1 || msg.indexOf("thanks for asking bot") !== -1 || msg.indexOf("bot thanks for asking") !== -1 || msg.indexOf("thx for asking bot") !== -1 || msg.indexOf("bot thx for asking") !== -1){
                var TYMsg = ["You're welcome! :D","Your always welcome bro!","No prob man.."];
                API.sendChat("@" + data.un + " " + TYMsg[Math.floor(Math.random() * TYMsg.length)]);
                    Funbot.misc.ready = false;
                    setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                }
        }
        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
            if(msg.indexOf("ily bot") !== -1 || msg.indexOf("bot ily") !== -1 || msg.indexOf("i love you bot") !== -1 || msg.indexOf("bot i love you") !== -1 || msg.indexOf("i luv you bot") !== -1 || msg.indexOf("bot i luv you") !== -1 || msg.indexOf("i luv u bot") !== -1 || msg.indexOf("bot i luv u") !== -1 || msg.indexOf("i luv you bot") !== -1 || msg.indexOf("i love you more bot") !== -1 || msg.indexOf("bot love you") !== -1 || msg.indexOf("love you bot") !== -1){
                var LoveMsg = ["Fuck yeahh!! :D I love you too baby!","I love you too ;).....   Sex?... JK you don't want this big thing ;)","I love you too o.0","Sweet.. Love you to ;)"];
                API.sendChat("@" + data.un + " " + LoveMsg[Math.floor(Math.random() * LoveMsg.length)]);
                    Funbot.misc.ready = false;
                    setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                }
        }
        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
            if(msg.indexOf("fuck you bot") !== -1 || msg.indexOf("bot fuck you") !== -1 || msg.indexOf("f u bot") !== -1 || msg.indexOf("bot f u") !== -1 || msg.indexOf("fuhk yuh bot") !== -1 || msg.indexOf("bot fuhk you") !== -1){
                var FuckMsg = ["Nah.. I don't need another fuck after giving your mom one last night.","</input fuck> Jk... Fuck you too","< Test fuck >.. Sorry 0% fucks were given by me."];
                API.sendChat("@" + data.un + " " + FuckMsg[Math.floor(Math.random() * FuckMsg.length)]);
                    Funbot.misc.ready = false;
                    setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                }
        }
        if(API.getUsers(data.un, PlugMod) || API.getUsers(data.un, PlugMod) || API.getUsers(data.un, Funbot.admins)){
            if(msg.indexOf("bot shut up") !== -1 || msg.indexOf("shut up bot") !== -1 || msg.indexOf("stfu bot") !== -1 || msg.indexOf("bot stfu") !== -1 || msg.indexOf("hush bot") !== -1 || msg.indexOf("bot hush") !== -1 || msg.indexOf("hush it bot") !== -1 || msg.indexOf("bot hush it") !== -1 || msg.indexOf("be quiet bot") !== -1 || msg.indexOf("bot be quiet") !== -1 || msg.indexOf("shut the hell up bot") !== -1 || msg.indexOf("bot shut the hell up") !== -1){
                var stfuMsg = ["<Test/ShutUp ... Nope","Eat this http://i.imgur.com/CSq5xkH.gif","No you shut up!","But i was made to talk.. :(","Just because i am a bot doesn't mean you have to tell me to shut up. Why don't you shut up!","Hey idiot! Ever heard of pressing the \"Ignore button\"?"];
                API.sendChat("@" + data.un + " " + stfuMsg[Math.floor(Math.random() * stfuMsg.length)]);
                    Funbot.misc.ready = false;
                    setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                }
        }
        if(msg.indexOf("i got to go") !== -1 || msg.indexOf("igtg") !== -1 || msg.indexOf("gtg") !== -1 || msg.indexOf("be back") !== -1 || msg.indexOf("going off") !== -1 || msg.indexOf("off to") !== -1 || msg.indexOf("have to go") !== -1 || msg.indexOf("bye bot") !== -1 || msg.indexOf("bot bye") !== -1){
        var AfkMsg = ["See ya man!","Awww, See ya babe.","Glad you came by thanks! :kissing_heart:","Thanks for coming. Hope to see you soon! :blue_heart:"];
            API.sendChat("@" + data.un + " " + AfkMsg[Math.floor(Math.random() * AfkMsg.length)]);
        }
        if(msg.indexOf(':eyeroll:') > -1){
           API.sendChat('/me ¬_¬');
        }
        if(msg.indexOf(':notamused:') > -1){
           API.sendChat('/me ಠ_ಠ');
        }
        if(msg.indexOf(':yuno:') > -1){
           API.sendChat('/me ლ(ಥ益ಥლ');
    
        }
    });
    
    
    function DJADVANCE(data){
        $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+data.media.cid+'?v=2&alt=jsonc&callback=?', function(json){response = json.data});
        setTimeout(function(){
            if(typeof response === 'undefined' && data.media.format != 2 && Funbot.settings.removedFilter){
                API.sendChat("@"+API.getDJ().username+" This video is unavailable!!");
                setTimeout("Funbot.skip();", 100);
            }
        }, 1500);
 
        cancel = false;
    }
 
    botMethods.loadStorage();
    console.log("Funbot-Script version " + Funbot.misc.version);
 
    setTimeout(function(){
        $.getScript('http://connect.soundcloud.com/sdk.js');
    }, 700);
 
    setTimeout(function(){
        SC.initialize({
            client_id: '23025049683040'
        });
    }, 3000);
 
    API.sendChat('Fun Bot version '+Funbot.misc.version+' Activated!');
   }else{
    alert("This bot can only function at http://plug.dj/community");
   };
