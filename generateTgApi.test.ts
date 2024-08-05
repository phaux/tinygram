import { assertSnapshot } from "jsr:@std/testing/snapshot";
import { generateTgApi } from "./generateTgApi.ts";

Deno.test("should match snapshot", async (t) => {
  // Take this partial snapshot of actual API description
  // and check if the code generated from it doesn't change
  // (It could change if we update TypeScript version).
  await assertSnapshot(
    t,
    generateTgApi({
      "version": "Bot API Test",
      "release_date": "July 31, 2024",
      "changelog": "https://core.telegram.org/bots/api#july-31-2024",
      "methods": {
        "getUpdates": {
          "name": "getUpdates",
          "href": "https://core.telegram.org/bots/api#getupdates",
          "description": [
            "Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects.",
          ],
          "returns": [
            "Array of Update",
          ],
          "fields": [
            {
              "name": "offset",
              "types": [
                "Integer",
              ],
              "required": false,
              "description":
                "Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten.",
            },
            {
              "name": "timeout",
              "types": [
                "Integer",
              ],
              "required": false,
              "description":
                "Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.",
            },
            {
              "name": "allowed_updates",
              "types": [
                "Array of String",
              ],
              "required": false,
              "description":
                'A JSON-serialized list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used. Please note that this parameter doesn\'t affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time.',
            },
          ],
        },
        "getMe": {
          "name": "getMe",
          "href": "https://core.telegram.org/bots/api#getme",
          "description": [
            "A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.",
          ],
          "returns": [
            "User",
          ],
        },
        "sendMessage": {
          "name": "sendMessage",
          "href": "https://core.telegram.org/bots/api#sendmessage",
          "description": [
            "Use this method to send text messages. On success, the sent Message is returned.",
          ],
          "returns": [
            "Message",
          ],
          "fields": [
            {
              "name": "chat_id",
              "types": [
                "Integer",
                "String",
              ],
              "required": true,
              "description":
                "Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
            },
            {
              "name": "text",
              "types": [
                "String",
              ],
              "required": true,
              "description":
                "Text of the message to be sent, 1-4096 characters after entities parsing",
            },
            {
              "name": "parse_mode",
              "types": [
                "String",
              ],
              "required": false,
              "description":
                "Mode for parsing entities in the message text. See formatting options for more details.",
            },
            {
              "name": "entities",
              "types": [
                "Array of MessageEntity",
              ],
              "required": false,
              "description":
                "A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode",
            },
            {
              "name": "reply_markup",
              "types": [
                "InlineKeyboardMarkup",
                "ReplyKeyboardMarkup",
                "ReplyKeyboardRemove",
                "ForceReply",
              ],
              "required": false,
              "description":
                "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user",
            },
          ],
        },
        "sendMediaGroup": {
          "name": "sendMediaGroup",
          "href": "https://core.telegram.org/bots/api#sendmediagroup",
          "description": [
            "Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.",
          ],
          "returns": [
            "Array of Message",
          ],
          "fields": [
            {
              "name": "chat_id",
              "types": [
                "Integer",
                "String",
              ],
              "required": true,
              "description":
                "Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
            },
            {
              "name": "media",
              "types": [
                "Array of InputMediaAudio",
                "Array of InputMediaDocument",
                "Array of InputMediaPhoto",
                "Array of InputMediaVideo",
              ],
              "required": true,
              "description":
                "A JSON-serialized array describing messages to be sent, must include 2-10 items",
            },
          ],
        },
        "uploadStickerFile": {
          "name": "uploadStickerFile",
          "href": "https://core.telegram.org/bots/api#uploadstickerfile",
          "description": [
            "Use this method to upload a file with a sticker for later use in the createNewStickerSet, addStickerToSet, or replaceStickerInSet methods (the file can be used multiple times). Returns the uploaded File on success.",
          ],
          "returns": [
            "File",
          ],
          "fields": [
            {
              "name": "user_id",
              "types": [
                "Integer",
              ],
              "required": true,
              "description": "User identifier of sticker file owner",
            },
            {
              "name": "sticker",
              "types": [
                "InputFile",
              ],
              "required": true,
              "description":
                "A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See https://core.telegram.org/stickers for technical requirements. More information on Sending Files: https://core.telegram.org/bots/api#sending-files",
            },
            {
              "name": "sticker_format",
              "types": [
                "String",
              ],
              "required": true,
              "description": 'Format of the sticker, must be one of "static", "animated", "video"',
            },
          ],
        },
        "setStickerSetThumbnail": {
          "name": "setStickerSetThumbnail",
          "href": "https://core.telegram.org/bots/api#setstickersetthumbnail",
          "description": [
            "Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.",
          ],
          "returns": [
            "Boolean",
          ],
          "fields": [
            {
              "name": "name",
              "types": [
                "String",
              ],
              "required": true,
              "description": "Sticker set name",
            },
            {
              "name": "user_id",
              "types": [
                "Integer",
              ],
              "required": true,
              "description": "User identifier of the sticker set owner",
            },
            {
              "name": "thumbnail",
              "types": [
                "InputFile",
                "String",
              ],
              "required": false,
              "description":
                "A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size (see https://core.telegram.org/stickers#animation-requirements for animated sticker technical requirements), or a WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files. Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail.",
            },
            {
              "name": "format",
              "types": [
                "String",
              ],
              "required": true,
              "description":
                'Format of the thumbnail, must be one of "static" for a .WEBP or .PNG image, "animated" for a .TGS animation, or "video" for a WEBM video',
            },
          ],
        },
      },
      "types": {
        "Update": {
          "name": "Update",
          "href": "https://core.telegram.org/bots/api#update",
          "description": [
            "This object represents an incoming update.",
            "At most one of the optional parameters can be present in any given update.",
          ],
          "fields": [
            {
              "name": "update_id",
              "types": [
                "Integer",
              ],
              "required": true,
              "description":
                "The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This identifier becomes especially handy if you're using webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.",
            },
            {
              "name": "message",
              "types": [
                "Message",
              ],
              "required": false,
              "description":
                "Optional. New incoming message of any kind - text, photo, sticker, etc.",
            },
            {
              "name": "chat_member",
              "types": [
                "ChatMemberUpdated",
              ],
              "required": false,
              "description":
                'Optional. A chat member\'s status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify "chat_member" in the list of allowed_updates to receive these updates.',
            },
          ],
        },
        "User": {
          "name": "User",
          "href": "https://core.telegram.org/bots/api#user",
          "description": [
            "This object represents a Telegram user or bot.",
          ],
          "fields": [
            {
              "name": "id",
              "types": [
                "Integer",
              ],
              "required": true,
              "description":
                "Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.",
            },
            {
              "name": "is_bot",
              "types": [
                "Boolean",
              ],
              "required": true,
              "description": "True, if this user is a bot",
            },
            {
              "name": "first_name",
              "types": [
                "String",
              ],
              "required": true,
              "description": "User's or bot's first name",
            },
            {
              "name": "last_name",
              "types": [
                "String",
              ],
              "required": false,
              "description": "Optional. User's or bot's last name",
            },
            {
              "name": "username",
              "types": [
                "String",
              ],
              "required": false,
              "description": "Optional. User's or bot's username",
            },
          ],
        },
        "Chat": {
          "name": "Chat",
          "href": "https://core.telegram.org/bots/api#chat",
          "description": [
            "This object represents a chat.",
          ],
          "fields": [
            {
              "name": "id",
              "types": [
                "Integer",
              ],
              "required": true,
              "description":
                "Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.",
            },
            {
              "name": "type",
              "types": [
                "String",
              ],
              "required": true,
              "description":
                'Type of the chat, can be either "private", "group", "supergroup" or "channel"',
            },
            {
              "name": "title",
              "types": [
                "String",
              ],
              "required": false,
              "description": "Optional. Title, for supergroups, channels and group chats",
            },
            {
              "name": "username",
              "types": [
                "String",
              ],
              "required": false,
              "description":
                "Optional. Username, for private chats, supergroups and channels if available",
            },
            {
              "name": "first_name",
              "types": [
                "String",
              ],
              "required": false,
              "description": "Optional. First name of the other party in a private chat",
            },
            {
              "name": "last_name",
              "types": [
                "String",
              ],
              "required": false,
              "description": "Optional. Last name of the other party in a private chat",
            },
          ],
        },
        "Message": {
          "name": "Message",
          "href": "https://core.telegram.org/bots/api#message",
          "description": [
            "This object represents a message.",
          ],
          "fields": [
            {
              "name": "message_id",
              "types": [
                "Integer",
              ],
              "required": true,
              "description": "Unique message identifier inside this chat",
            },
            {
              "name": "from",
              "types": [
                "User",
              ],
              "required": false,
              "description":
                "Optional. Sender of the message; empty for messages sent to channels. For backward compatibility, the field contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat.",
            },
            {
              "name": "date",
              "types": [
                "Integer",
              ],
              "required": true,
              "description":
                "Date the message was sent in Unix time. It is always a positive number, representing a valid date.",
            },
            {
              "name": "chat",
              "types": [
                "Chat",
              ],
              "required": true,
              "description": "Chat the message belongs to",
            },
            {
              "name": "reply_to_message",
              "types": [
                "Message",
              ],
              "required": false,
              "description":
                "Optional. For replies in the same chat and message thread, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.",
            },
            {
              "name": "via_bot",
              "types": [
                "User",
              ],
              "required": false,
              "description": "Optional. Bot through which the message was sent",
            },
            {
              "name": "text",
              "types": [
                "String",
              ],
              "required": false,
              "description": "Optional. For text messages, the actual UTF-8 text of the message",
            },
            {
              "name": "entities",
              "types": [
                "Array of MessageEntity",
              ],
              "required": false,
              "description":
                "Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text",
            },
            {
              "name": "photo",
              "types": [
                "Array of PhotoSize",
              ],
              "required": false,
              "description": "Optional. Message is a photo, available sizes of the photo",
            },
            {
              "name": "sticker",
              "types": [
                "Sticker",
              ],
              "required": false,
              "description": "Optional. Message is a sticker, information about the sticker",
            },
            {
              "name": "video",
              "types": [
                "Video",
              ],
              "required": false,
              "description": "Optional. Message is a video, information about the video",
            },
            {
              "name": "caption",
              "types": [
                "String",
              ],
              "required": false,
              "description":
                "Optional. Caption for the animation, audio, document, paid media, photo, video or voice",
            },
            {
              "name": "caption_entities",
              "types": [
                "Array of MessageEntity",
              ],
              "required": false,
              "description":
                "Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption",
            },
            {
              "name": "reply_markup",
              "types": [
                "InlineKeyboardMarkup",
              ],
              "required": false,
              "description":
                "Optional. Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons.",
            },
          ],
          "subtype_of": [
            "MaybeInaccessibleMessage",
          ],
        },
        "ChatMember": {
          "name": "ChatMember",
          "href": "https://core.telegram.org/bots/api#chatmember",
          "description": [
            "This object contains information about one member of a chat. Currently, the following 6 types of chat members are supported:",
            "- ChatMemberOwner",
            "- ChatMemberAdministrator",
            "- ChatMemberMember",
            "- ChatMemberRestricted",
            "- ChatMemberLeft",
            "- ChatMemberBanned",
          ],
          "subtypes": [
            "ChatMemberOwner",
            "ChatMemberAdministrator",
            "ChatMemberMember",
            "ChatMemberRestricted",
            "ChatMemberLeft",
            "ChatMemberBanned",
          ],
        },
        "ChatMemberOwner": {
          "name": "ChatMemberOwner",
          "href": "https://core.telegram.org/bots/api#chatmemberowner",
          "description": [
            "Represents a chat member that owns the chat and has all administrator privileges.",
          ],
          "subtype_of": [
            "ChatMember",
          ],
        },
        "ChatMemberAdministrator": {
          "name": "ChatMemberAdministrator",
          "href": "https://core.telegram.org/bots/api#chatmemberadministrator",
          "description": [
            "Represents a chat member that has some additional privileges.",
          ],
          "fields": [
            {
              "name": "status",
              "types": [
                "String",
              ],
              "required": true,
              "description": 'The member\'s status in the chat, always "administrator"',
            },
            {
              "name": "user",
              "types": [
                "User",
              ],
              "required": true,
              "description": "Information about the user",
            },
          ],
          "subtype_of": [
            "ChatMember",
          ],
        },
        "Location": {
          "name": "Location",
          "href": "https://core.telegram.org/bots/api#location",
          "description": [
            "This object represents a point on the map.",
          ],
          "fields": [
            {
              "name": "latitude",
              "types": [
                "Float",
              ],
              "required": true,
              "description": "Latitude as defined by the sender",
            },
            {
              "name": "longitude",
              "types": [
                "Float",
              ],
              "required": true,
              "description": "Longitude as defined by the sender",
            },
            {
              "name": "horizontal_accuracy",
              "types": [
                "Float",
              ],
              "required": false,
              "description":
                "Optional. The radius of uncertainty for the location, measured in meters; 0-1500",
            },
          ],
        },
        "BotCommandScopeDefault": {
          "name": "BotCommandScopeDefault",
          "href": "https://core.telegram.org/bots/api#botcommandscopedefault",
          "description": [
            "Represents the default scope of bot commands. Default commands are used if no commands with a narrower scope are specified for the user.",
          ],
          "fields": [
            {
              "name": "type",
              "types": [
                "String",
              ],
              "required": true,
              "description": "Scope type, must be default",
            },
          ],
          "subtype_of": [
            "BotCommandScope",
          ],
        },
        "ReactionTypeEmoji": {
          "name": "ReactionTypeEmoji",
          "href": "https://core.telegram.org/bots/api#reactiontypeemoji",
          "description": [
            "The reaction is based on an emoji.",
          ],
          "fields": [
            {
              "name": "type",
              "types": [
                "String",
              ],
              "required": true,
              "description": 'Type of the reaction, always "emoji"',
            },
            {
              "name": "emoji",
              "types": [
                "String",
              ],
              "required": true,
              "description":
                'Reaction emoji. Currently, it can be one of "\ud83d\udc4d", "\ud83d\udc4e", "\u2764", "\ud83d\udd25", "\ud83e\udd70", "\ud83d\udc4f", "\ud83d\ude01", "\ud83e\udd14", "\ud83e\udd2f", "\ud83d\ude31", "\ud83e\udd2c", "\ud83d\ude22", "\ud83c\udf89", "\ud83e\udd29", "\ud83e\udd2e", "\ud83d\udca9", "\ud83d\ude4f", "\ud83d\udc4c", "\ud83d\udd4a", "\ud83e\udd21", "\ud83e\udd71", "\ud83e\udd74", "\ud83d\ude0d", "\ud83d\udc33", "\u2764\u200d\ud83d\udd25", "\ud83c\udf1a", "\ud83c\udf2d", "\ud83d\udcaf", "\ud83e\udd23", "\u26a1", "\ud83c\udf4c", "\ud83c\udfc6", "\ud83d\udc94", "\ud83e\udd28", "\ud83d\ude10", "\ud83c\udf53", "\ud83c\udf7e", "\ud83d\udc8b", "\ud83d\udd95", "\ud83d\ude08", "\ud83d\ude34", "\ud83d\ude2d", "\ud83e\udd13", "\ud83d\udc7b", "\ud83d\udc68\u200d\ud83d\udcbb", "\ud83d\udc40", "\ud83c\udf83", "\ud83d\ude48", "\ud83d\ude07", "\ud83d\ude28", "\ud83e\udd1d", "\u270d", "\ud83e\udd17", "\ud83e\udee1", "\ud83c\udf85", "\ud83c\udf84", "\u2603", "\ud83d\udc85", "\ud83e\udd2a", "\ud83d\uddff", "\ud83c\udd92", "\ud83d\udc98", "\ud83d\ude49", "\ud83e\udd84", "\ud83d\ude18", "\ud83d\udc8a", "\ud83d\ude4a", "\ud83d\ude0e", "\ud83d\udc7e", "\ud83e\udd37\u200d\u2642", "\ud83e\udd37", "\ud83e\udd37\u200d\u2640", "\ud83d\ude21"',
            },
          ],
          "subtype_of": [
            "ReactionType",
          ],
        },
        "KeyboardButtonRequestChat": {
          "name": "KeyboardButtonRequestChat",
          "href": "https://core.telegram.org/bots/api#keyboardbuttonrequestchat",
          "description": [
            "This object defines the criteria used to request a suitable chat. Information about the selected chat will be shared with the bot when the corresponding button is pressed. The bot will be granted requested rights in the chat if appropriate. More about requesting chats: https://core.telegram.org/bots/features#chat-and-user-selection.",
          ],
          "fields": [
            {
              "name": "request_id",
              "types": [
                "Integer",
              ],
              "required": true,
              "description":
                "Signed 32-bit identifier of the request, which will be received back in the ChatShared object. Must be unique within the message",
            },
            {
              "name": "user_administrator_rights",
              "types": [
                "ChatAdministratorRights",
              ],
              "required": false,
              "description":
                "Optional. A JSON-serialized object listing the required administrator rights of the user in the chat. The rights must be a superset of bot_administrator_rights. If not specified, no additional restrictions are applied.",
            },
            {
              "name": "bot_administrator_rights",
              "types": [
                "ChatAdministratorRights",
              ],
              "required": false,
              "description":
                "Optional. A JSON-serialized object listing the required administrator rights of the bot in the chat. The rights must be a subset of user_administrator_rights. If not specified, no additional restrictions are applied.",
            },
            {
              "name": "bot_is_member",
              "types": [
                "Boolean",
              ],
              "required": false,
              "description":
                "Optional. Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied.",
            },
          ],
        },
        "InputFile": {
          "name": "InputFile",
          "href": "https://core.telegram.org/bots/api#inputfile",
          "description": [
            "This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.",
          ],
        },
        "InputMedia": {
          "name": "InputMedia",
          "href": "https://core.telegram.org/bots/api#inputmedia",
          "description": [
            "This object represents the content of a media message to be sent. It should be one of",
            "- InputMediaAnimation",
            "- InputMediaDocument",
            "- InputMediaAudio",
            "- InputMediaPhoto",
            "- InputMediaVideo",
          ],
          "subtypes": [
            "InputMediaAnimation",
            "InputMediaDocument",
            "InputMediaAudio",
            "InputMediaPhoto",
            "InputMediaVideo",
          ],
        },
        "InputMediaPhoto": {
          "name": "InputMediaPhoto",
          "href": "https://core.telegram.org/bots/api#inputmediaphoto",
          "description": [
            "Represents a photo to be sent.",
          ],
          "fields": [
            {
              "name": "type",
              "types": [
                "String",
              ],
              "required": true,
              "description": "Type of the result, must be photo",
            },
            {
              "name": "media",
              "types": [
                "String",
              ],
              "required": true,
              "description":
                'File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files',
            },
            {
              "name": "caption",
              "types": [
                "String",
              ],
              "required": false,
              "description":
                "Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing",
            },
            {
              "name": "parse_mode",
              "types": [
                "String",
              ],
              "required": false,
              "description":
                "Optional. Mode for parsing entities in the photo caption. See formatting options for more details.",
            },
            {
              "name": "caption_entities",
              "types": [
                "Array of MessageEntity",
              ],
              "required": false,
              "description":
                "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
            },
          ],
          "subtype_of": [
            "InputMedia",
          ],
        },
        "InputMediaVideo": {
          "name": "InputMediaVideo",
          "href": "https://core.telegram.org/bots/api#inputmediavideo",
          "description": [
            "Represents a video to be sent.",
          ],
          "fields": [
            {
              "name": "type",
              "types": [
                "String",
              ],
              "required": true,
              "description": "Type of the result, must be video",
            },
            {
              "name": "media",
              "types": [
                "String",
              ],
              "required": true,
              "description":
                'File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files',
            },
            {
              "name": "thumbnail",
              "types": [
                "InputFile",
                "String",
              ],
              "required": false,
              "description":
                "Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass \"attach://<file_attach_name>\" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files",
            },
            {
              "name": "caption",
              "types": [
                "String",
              ],
              "required": false,
              "description":
                "Optional. Caption of the video to be sent, 0-1024 characters after entities parsing",
            },
            {
              "name": "parse_mode",
              "types": [
                "String",
              ],
              "required": false,
              "description":
                "Optional. Mode for parsing entities in the video caption. See formatting options for more details.",
            },
            {
              "name": "caption_entities",
              "types": [
                "Array of MessageEntity",
              ],
              "required": false,
              "description":
                "Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode",
            },
            {
              "name": "width",
              "types": [
                "Integer",
              ],
              "required": false,
              "description": "Optional. Video width",
            },
            {
              "name": "height",
              "types": [
                "Integer",
              ],
              "required": false,
              "description": "Optional. Video height",
            },
            {
              "name": "duration",
              "types": [
                "Integer",
              ],
              "required": false,
              "description": "Optional. Video duration in seconds",
            },
          ],
          "subtype_of": [
            "InputMedia",
          ],
        },
      },
    }),
  );
});
