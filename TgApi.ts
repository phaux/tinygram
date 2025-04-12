// This file is auto-generated, do not edit it directly.

export const TG_API_VERSION = "Bot API 9.0" as const;
export interface TgApi<O = {}> {
  /**
   * Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects.
   *
   * @see https://core.telegram.org/bots/api#getupdates
   */
  getUpdates(params?: TgGetUpdatesParams | null | undefined, options?: O): Promise<TgUpdate[]>;
  /**
   * Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request (a request with response HTTP status code different from 2XY), we will repeat the request and give up after a reasonable amount of attempts. Returns True on success.
   *
   * If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token. If specified, the request will contain a header "X-Telegram-Bot-Api-Secret-Token" with the secret token as content.
   *
   * @see https://core.telegram.org/bots/api#setwebhook
   */
  setWebhook(params: TgSetWebhookParams, options?: O): Promise<boolean>;
  /**
   * Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#deletewebhook
   */
  deleteWebhook(params?: TgDeleteWebhookParams | null | undefined, options?: O): Promise<boolean>;
  /**
   * Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.
   *
   * @see https://core.telegram.org/bots/api#getwebhookinfo
   */
  getWebhookInfo(params?: null | undefined, options?: O): Promise<TgWebhookInfo>;
  /**
   * A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
   *
   * @see https://core.telegram.org/bots/api#getme
   */
  getMe(params?: null | undefined, options?: O): Promise<TgUser>;
  /**
   * Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters.
   *
   * @see https://core.telegram.org/bots/api#logout
   */
  logOut(params?: null | undefined, options?: O): Promise<boolean>;
  /**
   * Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.
   *
   * @see https://core.telegram.org/bots/api#close
   */
  close(params?: null | undefined, options?: O): Promise<boolean>;
  /**
   * Use this method to send text messages. On success, the sent Message is returned.
   *
   * @see https://core.telegram.org/bots/api#sendmessage
   */
  sendMessage(params: TgSendMessageParams, options?: O): Promise<TgMessage>;
  /**
   * Use this method to forward messages of any kind. Service messages and messages with protected content can't be forwarded. On success, the sent Message is returned.
   *
   * @see https://core.telegram.org/bots/api#forwardmessage
   */
  forwardMessage(params: TgForwardMessageParams, options?: O): Promise<TgMessage>;
  /**
   * Use this method to forward multiple messages of any kind. If some of the specified messages can't be found or forwarded, they are skipped. Service messages and messages with protected content can't be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned.
   *
   * @see https://core.telegram.org/bots/api#forwardmessages
   */
  forwardMessages(params: TgForwardMessagesParams, options?: O): Promise<TgMessageId[]>;
  /**
   * Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.
   *
   * @see https://core.telegram.org/bots/api#copymessage
   */
  copyMessage(params: TgCopyMessageParams, options?: O): Promise<TgMessageId>;
  /**
   * Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don't have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.
   *
   * @see https://core.telegram.org/bots/api#copymessages
   */
  copyMessages(params: TgCopyMessagesParams, options?: O): Promise<TgMessageId[]>;
  /**
   * Use this method to send photos. On success, the sent Message is returned.
   *
   * @see https://core.telegram.org/bots/api#sendphoto
   */
  sendPhoto(params: TgSendPhotoParams, options?: O): Promise<TgMessage>;
  /**
   * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
   *
   * For sending voice messages, use the sendVoice method instead.
   *
   * @see https://core.telegram.org/bots/api#sendaudio
   */
  sendAudio(params: TgSendAudioParams, options?: O): Promise<TgMessage>;
  /**
   * Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
   *
   * @see https://core.telegram.org/bots/api#senddocument
   */
  sendDocument(params: TgSendDocumentParams, options?: O): Promise<TgMessage>;
  /**
   * Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
   *
   * @see https://core.telegram.org/bots/api#sendvideo
   */
  sendVideo(params: TgSendVideoParams, options?: O): Promise<TgMessage>;
  /**
   * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
   *
   * @see https://core.telegram.org/bots/api#sendanimation
   */
  sendAnimation(params: TgSendAnimationParams, options?: O): Promise<TgMessage>;
  /**
   * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
   *
   * @see https://core.telegram.org/bots/api#sendvoice
   */
  sendVoice(params: TgSendVoiceParams, options?: O): Promise<TgMessage>;
  /**
   * As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.
   *
   * @see https://core.telegram.org/bots/api#sendvideonote
   */
  sendVideoNote(params: TgSendVideoNoteParams, options?: O): Promise<TgMessage>;
  /**
   * Use this method to send paid media. On success, the sent Message is returned.
   *
   * @see https://core.telegram.org/bots/api#sendpaidmedia
   */
  sendPaidMedia(params: TgSendPaidMediaParams, options?: O): Promise<TgMessage>;
  /**
   * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.
   *
   * @see https://core.telegram.org/bots/api#sendmediagroup
   */
  sendMediaGroup(params: TgSendMediaGroupParams, options?: O): Promise<TgMessage[]>;
  /**
   * Use this method to send point on the map. On success, the sent Message is returned.
   *
   * @see https://core.telegram.org/bots/api#sendlocation
   */
  sendLocation(params: TgSendLocationParams, options?: O): Promise<TgMessage>;
  /**
   * Use this method to send information about a venue. On success, the sent Message is returned.
   *
   * @see https://core.telegram.org/bots/api#sendvenue
   */
  sendVenue(params: TgSendVenueParams, options?: O): Promise<TgMessage>;
  /**
   * Use this method to send phone contacts. On success, the sent Message is returned.
   *
   * @see https://core.telegram.org/bots/api#sendcontact
   */
  sendContact(params: TgSendContactParams, options?: O): Promise<TgMessage>;
  /**
   * Use this method to send a native poll. On success, the sent Message is returned.
   *
   * @see https://core.telegram.org/bots/api#sendpoll
   */
  sendPoll(params: TgSendPollParams, options?: O): Promise<TgMessage>;
  /**
   * Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.
   *
   * @see https://core.telegram.org/bots/api#senddice
   */
  sendDice(params: TgSendDiceParams, options?: O): Promise<TgMessage>;
  /**
   * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success.
   *
   * We only recommend using this method when a response from the bot will take a noticeable amount of time to arrive.
   *
   * @see https://core.telegram.org/bots/api#sendchataction
   */
  sendChatAction(params: TgSendChatActionParams, options?: O): Promise<boolean>;
  /**
   * Use this method to change the chosen reactions on a message. Service messages of some types can't be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Bots can't use paid reactions. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setmessagereaction
   */
  setMessageReaction(params: TgSetMessageReactionParams, options?: O): Promise<boolean>;
  /**
   * Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
   *
   * @see https://core.telegram.org/bots/api#getuserprofilephotos
   */
  getUserProfilePhotos(
    params: TgGetUserProfilePhotosParams,
    options?: O,
  ): Promise<TgUserProfilePhotos>;
  /**
   * Changes the emoji status for a given user that previously allowed the bot to manage their emoji status via the Mini App method requestEmojiStatusAccess. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setuseremojistatus
   */
  setUserEmojiStatus(params: TgSetUserEmojiStatusParams, options?: O): Promise<boolean>;
  /**
   * Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
   *
   * Note: This function may not preserve the original file name and MIME type. You should save the file's MIME type and name (if available) when the File object is received.
   *
   * @see https://core.telegram.org/bots/api#getfile
   */
  getFile(params: TgGetFileParams, options?: O): Promise<TgFile>;
  /**
   * Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#banchatmember
   */
  banChatMember(params: TgBanChatMemberParams, options?: O): Promise<boolean>;
  /**
   * Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#unbanchatmember
   */
  unbanChatMember(params: TgUnbanChatMemberParams, options?: O): Promise<boolean>;
  /**
   * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#restrictchatmember
   */
  restrictChatMember(params: TgRestrictChatMemberParams, options?: O): Promise<boolean>;
  /**
   * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#promotechatmember
   */
  promoteChatMember(params: TgPromoteChatMemberParams, options?: O): Promise<boolean>;
  /**
   * Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setchatadministratorcustomtitle
   */
  setChatAdministratorCustomTitle(
    params: TgSetChatAdministratorCustomTitleParams,
    options?: O,
  ): Promise<boolean>;
  /**
   * Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#banchatsenderchat
   */
  banChatSenderChat(params: TgBanChatSenderChatParams, options?: O): Promise<boolean>;
  /**
   * Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#unbanchatsenderchat
   */
  unbanChatSenderChat(params: TgUnbanChatSenderChatParams, options?: O): Promise<boolean>;
  /**
   * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setchatpermissions
   */
  setChatPermissions(params: TgSetChatPermissionsParams, options?: O): Promise<boolean>;
  /**
   * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success.
   *
   * @see https://core.telegram.org/bots/api#exportchatinvitelink
   */
  exportChatInviteLink(params: TgExportChatInviteLinkParams, options?: O): Promise<string>;
  /**
   * Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.
   *
   * @see https://core.telegram.org/bots/api#createchatinvitelink
   */
  createChatInviteLink(
    params: TgCreateChatInviteLinkParams,
    options?: O,
  ): Promise<TgChatInviteLink>;
  /**
   * Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.
   *
   * @see https://core.telegram.org/bots/api#editchatinvitelink
   */
  editChatInviteLink(params: TgEditChatInviteLinkParams, options?: O): Promise<TgChatInviteLink>;
  /**
   * Use this method to create a subscription invite link for a channel chat. The bot must have the can_invite_users administrator rights. The link can be edited using the method editChatSubscriptionInviteLink or revoked using the method revokeChatInviteLink. Returns the new invite link as a ChatInviteLink object.
   *
   * @see https://core.telegram.org/bots/api#createchatsubscriptioninvitelink
   */
  createChatSubscriptionInviteLink(
    params: TgCreateChatSubscriptionInviteLinkParams,
    options?: O,
  ): Promise<TgChatInviteLink>;
  /**
   * Use this method to edit a subscription invite link created by the bot. The bot must have the can_invite_users administrator rights. Returns the edited invite link as a ChatInviteLink object.
   *
   * @see https://core.telegram.org/bots/api#editchatsubscriptioninvitelink
   */
  editChatSubscriptionInviteLink(
    params: TgEditChatSubscriptionInviteLinkParams,
    options?: O,
  ): Promise<TgChatInviteLink>;
  /**
   * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.
   *
   * @see https://core.telegram.org/bots/api#revokechatinvitelink
   */
  revokeChatInviteLink(
    params: TgRevokeChatInviteLinkParams,
    options?: O,
  ): Promise<TgChatInviteLink>;
  /**
   * Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#approvechatjoinrequest
   */
  approveChatJoinRequest(params: TgApproveChatJoinRequestParams, options?: O): Promise<boolean>;
  /**
   * Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#declinechatjoinrequest
   */
  declineChatJoinRequest(params: TgDeclineChatJoinRequestParams, options?: O): Promise<boolean>;
  /**
   * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setchatphoto
   */
  setChatPhoto(params: TgSetChatPhotoParams, options?: O): Promise<boolean>;
  /**
   * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#deletechatphoto
   */
  deleteChatPhoto(params: TgDeleteChatPhotoParams, options?: O): Promise<boolean>;
  /**
   * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setchattitle
   */
  setChatTitle(params: TgSetChatTitleParams, options?: O): Promise<boolean>;
  /**
   * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setchatdescription
   */
  setChatDescription(params: TgSetChatDescriptionParams, options?: O): Promise<boolean>;
  /**
   * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#pinchatmessage
   */
  pinChatMessage(params: TgPinChatMessageParams, options?: O): Promise<boolean>;
  /**
   * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#unpinchatmessage
   */
  unpinChatMessage(params: TgUnpinChatMessageParams, options?: O): Promise<boolean>;
  /**
   * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#unpinallchatmessages
   */
  unpinAllChatMessages(params: TgUnpinAllChatMessagesParams, options?: O): Promise<boolean>;
  /**
   * Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#leavechat
   */
  leaveChat(params: TgLeaveChatParams, options?: O): Promise<boolean>;
  /**
   * Use this method to get up-to-date information about the chat. Returns a ChatFullInfo object on success.
   *
   * @see https://core.telegram.org/bots/api#getchat
   */
  getChat(params: TgGetChatParams, options?: O): Promise<TgChatFullInfo>;
  /**
   * Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects.
   *
   * @see https://core.telegram.org/bots/api#getchatadministrators
   */
  getChatAdministrators(
    params: TgGetChatAdministratorsParams,
    options?: O,
  ): Promise<TgChatMember[]>;
  /**
   * Use this method to get the number of members in a chat. Returns Int on success.
   *
   * @see https://core.telegram.org/bots/api#getchatmembercount
   */
  getChatMemberCount(params: TgGetChatMemberCountParams, options?: O): Promise<number>;
  /**
   * Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.
   *
   * @see https://core.telegram.org/bots/api#getchatmember
   */
  getChatMember(params: TgGetChatMemberParams, options?: O): Promise<TgChatMember>;
  /**
   * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setchatstickerset
   */
  setChatStickerSet(params: TgSetChatStickerSetParams, options?: O): Promise<boolean>;
  /**
   * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#deletechatstickerset
   */
  deleteChatStickerSet(params: TgDeleteChatStickerSetParams, options?: O): Promise<boolean>;
  /**
   * Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.
   *
   * @see https://core.telegram.org/bots/api#getforumtopiciconstickers
   */
  getForumTopicIconStickers(params?: null | undefined, options?: O): Promise<TgSticker[]>;
  /**
   * Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a ForumTopic object.
   *
   * @see https://core.telegram.org/bots/api#createforumtopic
   */
  createForumTopic(params: TgCreateForumTopicParams, options?: O): Promise<TgForumTopic>;
  /**
   * Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#editforumtopic
   */
  editForumTopic(params: TgEditForumTopicParams, options?: O): Promise<boolean>;
  /**
   * Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#closeforumtopic
   */
  closeForumTopic(params: TgCloseForumTopicParams, options?: O): Promise<boolean>;
  /**
   * Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#reopenforumtopic
   */
  reopenForumTopic(params: TgReopenForumTopicParams, options?: O): Promise<boolean>;
  /**
   * Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#deleteforumtopic
   */
  deleteForumTopic(params: TgDeleteForumTopicParams, options?: O): Promise<boolean>;
  /**
   * Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#unpinallforumtopicmessages
   */
  unpinAllForumTopicMessages(
    params: TgUnpinAllForumTopicMessagesParams,
    options?: O,
  ): Promise<boolean>;
  /**
   * Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#editgeneralforumtopic
   */
  editGeneralForumTopic(params: TgEditGeneralForumTopicParams, options?: O): Promise<boolean>;
  /**
   * Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#closegeneralforumtopic
   */
  closeGeneralForumTopic(params: TgCloseGeneralForumTopicParams, options?: O): Promise<boolean>;
  /**
   * Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#reopengeneralforumtopic
   */
  reopenGeneralForumTopic(params: TgReopenGeneralForumTopicParams, options?: O): Promise<boolean>;
  /**
   * Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#hidegeneralforumtopic
   */
  hideGeneralForumTopic(params: TgHideGeneralForumTopicParams, options?: O): Promise<boolean>;
  /**
   * Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#unhidegeneralforumtopic
   */
  unhideGeneralForumTopic(params: TgUnhideGeneralForumTopicParams, options?: O): Promise<boolean>;
  /**
   * Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#unpinallgeneralforumtopicmessages
   */
  unpinAllGeneralForumTopicMessages(
    params: TgUnpinAllGeneralForumTopicMessagesParams,
    options?: O,
  ): Promise<boolean>;
  /**
   * Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.
   *
   * @see https://core.telegram.org/bots/api#answercallbackquery
   */
  answerCallbackQuery(params: TgAnswerCallbackQueryParams, options?: O): Promise<boolean>;
  /**
   * Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.
   *
   * @see https://core.telegram.org/bots/api#getuserchatboosts
   */
  getUserChatBoosts(params: TgGetUserChatBoostsParams, options?: O): Promise<TgUserChatBoosts>;
  /**
   * Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success.
   *
   * @see https://core.telegram.org/bots/api#getbusinessconnection
   */
  getBusinessConnection(
    params: TgGetBusinessConnectionParams,
    options?: O,
  ): Promise<TgBusinessConnection>;
  /**
   * Use this method to change the list of the bot's commands. See this manual for more details about bot commands. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setmycommands
   */
  setMyCommands(params: TgSetMyCommandsParams, options?: O): Promise<boolean>;
  /**
   * Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#deletemycommands
   */
  deleteMyCommands(
    params?: TgDeleteMyCommandsParams | null | undefined,
    options?: O,
  ): Promise<boolean>;
  /**
   * Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned.
   *
   * @see https://core.telegram.org/bots/api#getmycommands
   */
  getMyCommands(
    params?: TgGetMyCommandsParams | null | undefined,
    options?: O,
  ): Promise<TgBotCommand[]>;
  /**
   * Use this method to change the bot's name. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setmyname
   */
  setMyName(params?: TgSetMyNameParams | null | undefined, options?: O): Promise<boolean>;
  /**
   * Use this method to get the current bot name for the given user language. Returns BotName on success.
   *
   * @see https://core.telegram.org/bots/api#getmyname
   */
  getMyName(params?: TgGetMyNameParams | null | undefined, options?: O): Promise<TgBotName>;
  /**
   * Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setmydescription
   */
  setMyDescription(
    params?: TgSetMyDescriptionParams | null | undefined,
    options?: O,
  ): Promise<boolean>;
  /**
   * Use this method to get the current bot description for the given user language. Returns BotDescription on success.
   *
   * @see https://core.telegram.org/bots/api#getmydescription
   */
  getMyDescription(
    params?: TgGetMyDescriptionParams | null | undefined,
    options?: O,
  ): Promise<TgBotDescription>;
  /**
   * Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setmyshortdescription
   */
  setMyShortDescription(
    params?: TgSetMyShortDescriptionParams | null | undefined,
    options?: O,
  ): Promise<boolean>;
  /**
   * Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success.
   *
   * @see https://core.telegram.org/bots/api#getmyshortdescription
   */
  getMyShortDescription(
    params?: TgGetMyShortDescriptionParams | null | undefined,
    options?: O,
  ): Promise<TgBotShortDescription>;
  /**
   * Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setchatmenubutton
   */
  setChatMenuButton(
    params?: TgSetChatMenuButtonParams | null | undefined,
    options?: O,
  ): Promise<boolean>;
  /**
   * Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns MenuButton on success.
   *
   * @see https://core.telegram.org/bots/api#getchatmenubutton
   */
  getChatMenuButton(
    params?: TgGetChatMenuButtonParams | null | undefined,
    options?: O,
  ): Promise<TgMenuButton>;
  /**
   * Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setmydefaultadministratorrights
   */
  setMyDefaultAdministratorRights(
    params?: TgSetMyDefaultAdministratorRightsParams | null | undefined,
    options?: O,
  ): Promise<boolean>;
  /**
   * Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.
   *
   * @see https://core.telegram.org/bots/api#getmydefaultadministratorrights
   */
  getMyDefaultAdministratorRights(
    params?: TgGetMyDefaultAdministratorRightsParams | null | undefined,
    options?: O,
  ): Promise<TgChatAdministratorRights>;
  /**
   * Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
   *
   * @see https://core.telegram.org/bots/api#editmessagetext
   */
  editMessageText(params: TgEditMessageTextParams, options?: O): Promise<TgMessage | boolean>;
  /**
   * Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
   *
   * @see https://core.telegram.org/bots/api#editmessagecaption
   */
  editMessageCaption(
    params?: TgEditMessageCaptionParams | null | undefined,
    options?: O,
  ): Promise<TgMessage | boolean>;
  /**
   * Use this method to edit animation, audio, document, photo, or video messages, or to add media to text messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
   *
   * @see https://core.telegram.org/bots/api#editmessagemedia
   */
  editMessageMedia(params: TgEditMessageMediaParams, options?: O): Promise<TgMessage | boolean>;
  /**
   * Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   *
   * @see https://core.telegram.org/bots/api#editmessagelivelocation
   */
  editMessageLiveLocation(
    params: TgEditMessageLiveLocationParams,
    options?: O,
  ): Promise<TgMessage | boolean>;
  /**
   * Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.
   *
   * @see https://core.telegram.org/bots/api#stopmessagelivelocation
   */
  stopMessageLiveLocation(
    params?: TgStopMessageLiveLocationParams | null | undefined,
    options?: O,
  ): Promise<TgMessage | boolean>;
  /**
   * Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.
   *
   * @see https://core.telegram.org/bots/api#editmessagereplymarkup
   */
  editMessageReplyMarkup(
    params?: TgEditMessageReplyMarkupParams | null | undefined,
    options?: O,
  ): Promise<TgMessage | boolean>;
  /**
   * Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.
   *
   * @see https://core.telegram.org/bots/api#stoppoll
   */
  stopPoll(params: TgStopPollParams, options?: O): Promise<TgPoll>;
  /**
   * Use this method to delete a message, including service messages, with the following limitations:
   *
   * - A message can only be deleted if it was sent less than 48 hours ago.
   *
   * - Service messages about a supergroup, channel, or forum topic creation can't be deleted.
   *
   * - A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.
   *
   * - Bots can delete outgoing messages in private chats, groups, and supergroups.
   *
   * - Bots can delete incoming messages in private chats.
   *
   * - Bots granted can_post_messages permissions can delete outgoing messages in channels.
   *
   * - If the bot is an administrator of a group, it can delete any message there.
   *
   * - If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.
   *
   * Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#deletemessage
   */
  deleteMessage(params: TgDeleteMessageParams, options?: O): Promise<boolean>;
  /**
   * Use this method to delete multiple messages simultaneously. If some of the specified messages can't be found, they are skipped. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#deletemessages
   */
  deleteMessages(params: TgDeleteMessagesParams, options?: O): Promise<boolean>;
  /**
   * Returns the list of gifts that can be sent by the bot to users and channel chats. Requires no parameters. Returns a Gifts object.
   *
   * @see https://core.telegram.org/bots/api#getavailablegifts
   */
  getAvailableGifts(params?: null | undefined, options?: O): Promise<TgGifts>;
  /**
   * Sends a gift to the given user or channel chat. The gift can't be converted to Telegram Stars by the receiver. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#sendgift
   */
  sendGift(params: TgSendGiftParams, options?: O): Promise<boolean>;
  /**
   * Gifts a Telegram Premium subscription to the given user. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#giftpremiumsubscription
   */
  giftPremiumSubscription(params: TgGiftPremiumSubscriptionParams, options?: O): Promise<boolean>;
  /**
   * Verifies a user on behalf of the organization which is represented by the bot. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#verifyuser
   */
  verifyUser(params: TgVerifyUserParams, options?: O): Promise<boolean>;
  /**
   * Verifies a chat on behalf of the organization which is represented by the bot. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#verifychat
   */
  verifyChat(params: TgVerifyChatParams, options?: O): Promise<boolean>;
  /**
   * Removes verification from a user who is currently verified on behalf of the organization represented by the bot. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#removeuserverification
   */
  removeUserVerification(params: TgRemoveUserVerificationParams, options?: O): Promise<boolean>;
  /**
   * Removes verification from a chat that is currently verified on behalf of the organization represented by the bot. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#removechatverification
   */
  removeChatVerification(params: TgRemoveChatVerificationParams, options?: O): Promise<boolean>;
  /**
   * Marks incoming message as read on behalf of a business account. Requires the can_read_messages business bot right. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#readbusinessmessage
   */
  readBusinessMessage(params: TgReadBusinessMessageParams, options?: O): Promise<boolean>;
  /**
   * Delete messages on behalf of a business account. Requires the can_delete_outgoing_messages business bot right to delete messages sent by the bot itself, or the can_delete_all_messages business bot right to delete any message. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#deletebusinessmessages
   */
  deleteBusinessMessages(params: TgDeleteBusinessMessagesParams, options?: O): Promise<boolean>;
  /**
   * Changes the first and last name of a managed business account. Requires the can_change_name business bot right. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setbusinessaccountname
   */
  setBusinessAccountName(params: TgSetBusinessAccountNameParams, options?: O): Promise<boolean>;
  /**
   * Changes the username of a managed business account. Requires the can_change_username business bot right. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setbusinessaccountusername
   */
  setBusinessAccountUsername(
    params: TgSetBusinessAccountUsernameParams,
    options?: O,
  ): Promise<boolean>;
  /**
   * Changes the bio of a managed business account. Requires the can_change_bio business bot right. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setbusinessaccountbio
   */
  setBusinessAccountBio(params: TgSetBusinessAccountBioParams, options?: O): Promise<boolean>;
  /**
   * Changes the profile photo of a managed business account. Requires the can_edit_profile_photo business bot right. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setbusinessaccountprofilephoto
   */
  setBusinessAccountProfilePhoto(
    params: TgSetBusinessAccountProfilePhotoParams,
    options?: O,
  ): Promise<boolean>;
  /**
   * Removes the current profile photo of a managed business account. Requires the can_edit_profile_photo business bot right. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#removebusinessaccountprofilephoto
   */
  removeBusinessAccountProfilePhoto(
    params: TgRemoveBusinessAccountProfilePhotoParams,
    options?: O,
  ): Promise<boolean>;
  /**
   * Changes the privacy settings pertaining to incoming gifts in a managed business account. Requires the can_change_gift_settings business bot right. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setbusinessaccountgiftsettings
   */
  setBusinessAccountGiftSettings(
    params: TgSetBusinessAccountGiftSettingsParams,
    options?: O,
  ): Promise<boolean>;
  /**
   * Returns the amount of Telegram Stars owned by a managed business account. Requires the can_view_gifts_and_stars business bot right. Returns StarAmount on success.
   *
   * @see https://core.telegram.org/bots/api#getbusinessaccountstarbalance
   */
  getBusinessAccountStarBalance(
    params: TgGetBusinessAccountStarBalanceParams,
    options?: O,
  ): Promise<TgStarAmount>;
  /**
   * Transfers Telegram Stars from the business account balance to the bot's balance. Requires the can_transfer_stars business bot right. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#transferbusinessaccountstars
   */
  transferBusinessAccountStars(
    params: TgTransferBusinessAccountStarsParams,
    options?: O,
  ): Promise<boolean>;
  /**
   * Returns the gifts received and owned by a managed business account. Requires the can_view_gifts_and_stars business bot right. Returns OwnedGifts on success.
   *
   * @see https://core.telegram.org/bots/api#getbusinessaccountgifts
   */
  getBusinessAccountGifts(
    params: TgGetBusinessAccountGiftsParams,
    options?: O,
  ): Promise<TgOwnedGifts>;
  /**
   * Converts a given regular gift to Telegram Stars. Requires the can_convert_gifts_to_stars business bot right. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#convertgifttostars
   */
  convertGiftToStars(params: TgConvertGiftToStarsParams, options?: O): Promise<boolean>;
  /**
   * Upgrades a given regular gift to a unique gift. Requires the can_transfer_and_upgrade_gifts business bot right. Additionally requires the can_transfer_stars business bot right if the upgrade is paid. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#upgradegift
   */
  upgradeGift(params: TgUpgradeGiftParams, options?: O): Promise<boolean>;
  /**
   * Transfers an owned unique gift to another user. Requires the can_transfer_and_upgrade_gifts business bot right. Requires can_transfer_stars business bot right if the transfer is paid. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#transfergift
   */
  transferGift(params: TgTransferGiftParams, options?: O): Promise<boolean>;
  /**
   * Posts a story on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns Story on success.
   *
   * @see https://core.telegram.org/bots/api#poststory
   */
  postStory(params: TgPostStoryParams, options?: O): Promise<TgStory>;
  /**
   * Edits a story previously posted by the bot on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns Story on success.
   *
   * @see https://core.telegram.org/bots/api#editstory
   */
  editStory(params: TgEditStoryParams, options?: O): Promise<TgStory>;
  /**
   * Deletes a story previously posted by the bot on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#deletestory
   */
  deleteStory(params: TgDeleteStoryParams, options?: O): Promise<boolean>;
  /**
   * Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.
   *
   * @see https://core.telegram.org/bots/api#sendsticker
   */
  sendSticker(params: TgSendStickerParams, options?: O): Promise<TgMessage>;
  /**
   * Use this method to get a sticker set. On success, a StickerSet object is returned.
   *
   * @see https://core.telegram.org/bots/api#getstickerset
   */
  getStickerSet(params: TgGetStickerSetParams, options?: O): Promise<TgStickerSet>;
  /**
   * Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.
   *
   * @see https://core.telegram.org/bots/api#getcustomemojistickers
   */
  getCustomEmojiStickers(params: TgGetCustomEmojiStickersParams, options?: O): Promise<TgSticker[]>;
  /**
   * Use this method to upload a file with a sticker for later use in the createNewStickerSet, addStickerToSet, or replaceStickerInSet methods (the file can be used multiple times). Returns the uploaded File on success.
   *
   * @see https://core.telegram.org/bots/api#uploadstickerfile
   */
  uploadStickerFile(params: TgUploadStickerFileParams, options?: O): Promise<TgFile>;
  /**
   * Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#createnewstickerset
   */
  createNewStickerSet(params: TgCreateNewStickerSetParams, options?: O): Promise<boolean>;
  /**
   * Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers. Other sticker sets can have up to 120 stickers. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#addstickertoset
   */
  addStickerToSet(params: TgAddStickerToSetParams, options?: O): Promise<boolean>;
  /**
   * Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setstickerpositioninset
   */
  setStickerPositionInSet(params: TgSetStickerPositionInSetParams, options?: O): Promise<boolean>;
  /**
   * Use this method to delete a sticker from a set created by the bot. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#deletestickerfromset
   */
  deleteStickerFromSet(params: TgDeleteStickerFromSetParams, options?: O): Promise<boolean>;
  /**
   * Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#replacestickerinset
   */
  replaceStickerInSet(params: TgReplaceStickerInSetParams, options?: O): Promise<boolean>;
  /**
   * Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setstickeremojilist
   */
  setStickerEmojiList(params: TgSetStickerEmojiListParams, options?: O): Promise<boolean>;
  /**
   * Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setstickerkeywords
   */
  setStickerKeywords(params: TgSetStickerKeywordsParams, options?: O): Promise<boolean>;
  /**
   * Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setstickermaskposition
   */
  setStickerMaskPosition(params: TgSetStickerMaskPositionParams, options?: O): Promise<boolean>;
  /**
   * Use this method to set the title of a created sticker set. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setstickersettitle
   */
  setStickerSetTitle(params: TgSetStickerSetTitleParams, options?: O): Promise<boolean>;
  /**
   * Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setstickersetthumbnail
   */
  setStickerSetThumbnail(params: TgSetStickerSetThumbnailParams, options?: O): Promise<boolean>;
  /**
   * Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#setcustomemojistickersetthumbnail
   */
  setCustomEmojiStickerSetThumbnail(
    params: TgSetCustomEmojiStickerSetThumbnailParams,
    options?: O,
  ): Promise<boolean>;
  /**
   * Use this method to delete a sticker set that was created by the bot. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#deletestickerset
   */
  deleteStickerSet(params: TgDeleteStickerSetParams, options?: O): Promise<boolean>;
  /**
   * Use this method to send answers to an inline query. On success, True is returned.
   *
   * No more than 50 results per query are allowed.
   *
   * @see https://core.telegram.org/bots/api#answerinlinequery
   */
  answerInlineQuery(params: TgAnswerInlineQueryParams, options?: O): Promise<boolean>;
  /**
   * Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.
   *
   * @see https://core.telegram.org/bots/api#answerwebappquery
   */
  answerWebAppQuery(params: TgAnswerWebAppQueryParams, options?: O): Promise<TgSentWebAppMessage>;
  /**
   * Stores a message that can be sent by a user of a Mini App. Returns a PreparedInlineMessage object.
   *
   * @see https://core.telegram.org/bots/api#savepreparedinlinemessage
   */
  savePreparedInlineMessage(
    params: TgSavePreparedInlineMessageParams,
    options?: O,
  ): Promise<TgPreparedInlineMessage>;
  /**
   * Use this method to send invoices. On success, the sent Message is returned.
   *
   * @see https://core.telegram.org/bots/api#sendinvoice
   */
  sendInvoice(params: TgSendInvoiceParams, options?: O): Promise<TgMessage>;
  /**
   * Use this method to create a link for an invoice. Returns the created invoice link as String on success.
   *
   * @see https://core.telegram.org/bots/api#createinvoicelink
   */
  createInvoiceLink(params: TgCreateInvoiceLinkParams, options?: O): Promise<string>;
  /**
   * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
   *
   * @see https://core.telegram.org/bots/api#answershippingquery
   */
  answerShippingQuery(params: TgAnswerShippingQueryParams, options?: O): Promise<boolean>;
  /**
   * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
   *
   * @see https://core.telegram.org/bots/api#answerprecheckoutquery
   */
  answerPreCheckoutQuery(params: TgAnswerPreCheckoutQueryParams, options?: O): Promise<boolean>;
  /**
   * Returns the bot's Telegram Star transactions in chronological order. On success, returns a StarTransactions object.
   *
   * @see https://core.telegram.org/bots/api#getstartransactions
   */
  getStarTransactions(
    params?: TgGetStarTransactionsParams | null | undefined,
    options?: O,
  ): Promise<TgStarTransactions>;
  /**
   * Refunds a successful payment in Telegram Stars. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#refundstarpayment
   */
  refundStarPayment(params: TgRefundStarPaymentParams, options?: O): Promise<boolean>;
  /**
   * Allows the bot to cancel or re-enable extension of a subscription paid in Telegram Stars. Returns True on success.
   *
   * @see https://core.telegram.org/bots/api#edituserstarsubscription
   */
  editUserStarSubscription(params: TgEditUserStarSubscriptionParams, options?: O): Promise<boolean>;
  /**
   * Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.
   *
   * Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.
   *
   * @see https://core.telegram.org/bots/api#setpassportdataerrors
   */
  setPassportDataErrors(params: TgSetPassportDataErrorsParams, options?: O): Promise<boolean>;
  /**
   * Use this method to send a game. On success, the sent Message is returned.
   *
   * @see https://core.telegram.org/bots/api#sendgame
   */
  sendGame(params: TgSendGameParams, options?: O): Promise<TgMessage>;
  /**
   * Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False.
   *
   * @see https://core.telegram.org/bots/api#setgamescore
   */
  setGameScore(params: TgSetGameScoreParams, options?: O): Promise<TgMessage | boolean>;
  /**
   * Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.
   *
   * @see https://core.telegram.org/bots/api#getgamehighscores
   */
  getGameHighScores(params: TgGetGameHighScoresParams, options?: O): Promise<TgGameHighScore[]>;
}
/**
 * Parameters of {@link TgApi.getUpdates} method.
 *
 * @see https://core.telegram.org/bots/api#getupdates
 */
export type TgGetUpdatesParams = {
  /**
   * Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten.
   */
  offset?: number | undefined;
  /**
   * Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.
   */
  limit?: number | undefined;
  /**
   * Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.
   */
  timeout?: number | undefined;
  /**
   * A JSON-serialized list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used. Please note that this parameter doesn't affect updates created before the call to getUpdates, so unwanted updates may be received for a short period of time.
   */
  allowed_updates?: Exclude<keyof TgUpdate, "update_id">[] | undefined;
};
/**
 * Parameters of {@link TgApi.setWebhook} method.
 *
 * @see https://core.telegram.org/bots/api#setwebhook
 */
export type TgSetWebhookParams = {
  /**
   * HTTPS URL to send updates to. Use an empty string to remove webhook integration
   */
  url: string;
  /**
   * Upload your public key certificate so that the root certificate in use can be checked. See our self-signed guide for details.
   */
  certificate?: TgInputFile | undefined;
  /**
   * The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS
   */
  ip_address?: string | undefined;
  /**
   * The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput.
   */
  max_connections?: number | undefined;
  /**
   * A JSON-serialized list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used. Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.
   */
  allowed_updates?: Exclude<keyof TgUpdate, "update_id">[] | undefined;
  /**
   * Pass True to drop all pending updates
   */
  drop_pending_updates?: boolean | undefined;
  /**
   * A secret token to be sent in a header "X-Telegram-Bot-Api-Secret-Token" in every webhook request, 1-256 characters. Only characters A-Z, a-z, 0-9, _ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you.
   */
  secret_token?: string | undefined;
};
/**
 * Parameters of {@link TgApi.deleteWebhook} method.
 *
 * @see https://core.telegram.org/bots/api#deletewebhook
 */
export type TgDeleteWebhookParams = {
  /**
   * Pass True to drop all pending updates
   */
  drop_pending_updates?: boolean | undefined;
};
/**
 * Parameters of {@link TgApi.sendMessage} method.
 *
 * @see https://core.telegram.org/bots/api#sendmessage
 */
export type TgSendMessageParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Text of the message to be sent, 1-4096 characters after entities parsing
   */
  text: string;
  /**
   * Mode for parsing entities in the message text. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
   */
  entities?: TgMessageEntity[] | undefined;
  /**
   * Link preview generation options for the message
   */
  link_preview_options?: TgLinkPreviewOptions | undefined;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean | undefined;
  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string | undefined;
  /**
   * Description of the message to reply to
   */
  reply_parameters?: TgReplyParameters | undefined;
  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | TgInlineKeyboardMarkup
    | TgReplyKeyboardMarkup
    | TgReplyKeyboardRemove
    | TgForceReply
    | undefined;
};
/**
 * Parameters of {@link TgApi.forwardMessage} method.
 *
 * @see https://core.telegram.org/bots/api#forwardmessage
 */
export type TgForwardMessageParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
   */
  from_chat_id: number | string;
  /**
   * New start timestamp for the forwarded video in the message
   */
  video_start_timestamp?: number | undefined;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the forwarded message from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Message identifier in the chat specified in from_chat_id
   */
  message_id: number;
};
/**
 * Parameters of {@link TgApi.forwardMessages} method.
 *
 * @see https://core.telegram.org/bots/api#forwardmessages
 */
export type TgForwardMessagesParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)
   */
  from_chat_id: number | string;
  /**
   * A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to forward. The identifiers must be specified in a strictly increasing order.
   */
  message_ids: number[];
  /**
   * Sends the messages silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the forwarded messages from forwarding and saving
   */
  protect_content?: boolean | undefined;
};
/**
 * Parameters of {@link TgApi.copyMessage} method.
 *
 * @see https://core.telegram.org/bots/api#copymessage
 */
export type TgCopyMessageParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
   */
  from_chat_id: number | string;
  /**
   * Message identifier in the chat specified in from_chat_id
   */
  message_id: number;
  /**
   * New start timestamp for the copied video in the message
   */
  video_start_timestamp?: number | undefined;
  /**
   * New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept
   */
  caption?: string | undefined;
  /**
   * Mode for parsing entities in the new caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Pass True, if the caption must be shown above the message media. Ignored if a new caption isn't specified.
   */
  show_caption_above_media?: boolean | undefined;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean | undefined;
  /**
   * Description of the message to reply to
   */
  reply_parameters?: TgReplyParameters | undefined;
  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | TgInlineKeyboardMarkup
    | TgReplyKeyboardMarkup
    | TgReplyKeyboardRemove
    | TgForceReply
    | undefined;
};
/**
 * Parameters of {@link TgApi.copyMessages} method.
 *
 * @see https://core.telegram.org/bots/api#copymessages
 */
export type TgCopyMessagesParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)
   */
  from_chat_id: number | string;
  /**
   * A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to copy. The identifiers must be specified in a strictly increasing order.
   */
  message_ids: number[];
  /**
   * Sends the messages silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent messages from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to copy the messages without their captions
   */
  remove_caption?: boolean | undefined;
};
/**
 * Parameters of {@link TgApi.sendPhoto} method.
 *
 * @see https://core.telegram.org/bots/api#sendphoto
 */
export type TgSendPhotoParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  photo: TgInputFile | string;
  /**
   * Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Mode for parsing entities in the photo caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean | undefined;
  /**
   * Pass True if the photo needs to be covered with a spoiler animation
   */
  has_spoiler?: boolean | undefined;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean | undefined;
  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string | undefined;
  /**
   * Description of the message to reply to
   */
  reply_parameters?: TgReplyParameters | undefined;
  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | TgInlineKeyboardMarkup
    | TgReplyKeyboardMarkup
    | TgReplyKeyboardRemove
    | TgForceReply
    | undefined;
};
/**
 * Parameters of {@link TgApi.sendAudio} method.
 *
 * @see https://core.telegram.org/bots/api#sendaudio
 */
export type TgSendAudioParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  audio: TgInputFile | string;
  /**
   * Audio caption, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Mode for parsing entities in the audio caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Duration of the audio in seconds
   */
  duration?: number | undefined;
  /**
   * Performer
   */
  performer?: string | undefined;
  /**
   * Track name
   */
  title?: string | undefined;
  /**
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  thumbnail?: TgInputFile | string | undefined;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean | undefined;
  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string | undefined;
  /**
   * Description of the message to reply to
   */
  reply_parameters?: TgReplyParameters | undefined;
  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | TgInlineKeyboardMarkup
    | TgReplyKeyboardMarkup
    | TgReplyKeyboardRemove
    | TgForceReply
    | undefined;
};
/**
 * Parameters of {@link TgApi.sendDocument} method.
 *
 * @see https://core.telegram.org/bots/api#senddocument
 */
export type TgSendDocumentParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  document: TgInputFile | string;
  /**
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  thumbnail?: TgInputFile | string | undefined;
  /**
   * Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Mode for parsing entities in the document caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Disables automatic server-side content type detection for files uploaded using multipart/form-data
   */
  disable_content_type_detection?: boolean | undefined;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean | undefined;
  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string | undefined;
  /**
   * Description of the message to reply to
   */
  reply_parameters?: TgReplyParameters | undefined;
  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | TgInlineKeyboardMarkup
    | TgReplyKeyboardMarkup
    | TgReplyKeyboardRemove
    | TgForceReply
    | undefined;
};
/**
 * Parameters of {@link TgApi.sendVideo} method.
 *
 * @see https://core.telegram.org/bots/api#sendvideo
 */
export type TgSendVideoParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  video: TgInputFile | string;
  /**
   * Duration of sent video in seconds
   */
  duration?: number | undefined;
  /**
   * Video width
   */
  width?: number | undefined;
  /**
   * Video height
   */
  height?: number | undefined;
  /**
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  thumbnail?: TgInputFile | string | undefined;
  /**
   * Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  cover?: TgInputFile | string | undefined;
  /**
   * Start timestamp for the video in the message
   */
  start_timestamp?: number | undefined;
  /**
   * Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Mode for parsing entities in the video caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean | undefined;
  /**
   * Pass True if the video needs to be covered with a spoiler animation
   */
  has_spoiler?: boolean | undefined;
  /**
   * Pass True if the uploaded video is suitable for streaming
   */
  supports_streaming?: boolean | undefined;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean | undefined;
  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string | undefined;
  /**
   * Description of the message to reply to
   */
  reply_parameters?: TgReplyParameters | undefined;
  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | TgInlineKeyboardMarkup
    | TgReplyKeyboardMarkup
    | TgReplyKeyboardRemove
    | TgForceReply
    | undefined;
};
/**
 * Parameters of {@link TgApi.sendAnimation} method.
 *
 * @see https://core.telegram.org/bots/api#sendanimation
 */
export type TgSendAnimationParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  animation: TgInputFile | string;
  /**
   * Duration of sent animation in seconds
   */
  duration?: number | undefined;
  /**
   * Animation width
   */
  width?: number | undefined;
  /**
   * Animation height
   */
  height?: number | undefined;
  /**
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  thumbnail?: TgInputFile | string | undefined;
  /**
   * Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Mode for parsing entities in the animation caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean | undefined;
  /**
   * Pass True if the animation needs to be covered with a spoiler animation
   */
  has_spoiler?: boolean | undefined;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean | undefined;
  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string | undefined;
  /**
   * Description of the message to reply to
   */
  reply_parameters?: TgReplyParameters | undefined;
  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | TgInlineKeyboardMarkup
    | TgReplyKeyboardMarkup
    | TgReplyKeyboardRemove
    | TgForceReply
    | undefined;
};
/**
 * Parameters of {@link TgApi.sendVoice} method.
 *
 * @see https://core.telegram.org/bots/api#sendvoice
 */
export type TgSendVoiceParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  voice: TgInputFile | string;
  /**
   * Voice message caption, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Mode for parsing entities in the voice message caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Duration of the voice message in seconds
   */
  duration?: number | undefined;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean | undefined;
  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string | undefined;
  /**
   * Description of the message to reply to
   */
  reply_parameters?: TgReplyParameters | undefined;
  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | TgInlineKeyboardMarkup
    | TgReplyKeyboardMarkup
    | TgReplyKeyboardRemove
    | TgForceReply
    | undefined;
};
/**
 * Parameters of {@link TgApi.sendVideoNote} method.
 *
 * @see https://core.telegram.org/bots/api#sendvideonote
 */
export type TgSendVideoNoteParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files. Sending video notes by a URL is currently unsupported
   */
  video_note: TgInputFile | string;
  /**
   * Duration of sent video in seconds
   */
  duration?: number | undefined;
  /**
   * Video width and height, i.e. diameter of the video message
   */
  length?: number | undefined;
  /**
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  thumbnail?: TgInputFile | string | undefined;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean | undefined;
  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string | undefined;
  /**
   * Description of the message to reply to
   */
  reply_parameters?: TgReplyParameters | undefined;
  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | TgInlineKeyboardMarkup
    | TgReplyKeyboardMarkup
    | TgReplyKeyboardRemove
    | TgForceReply
    | undefined;
};
/**
 * Parameters of {@link TgApi.sendPaidMedia} method.
 *
 * @see https://core.telegram.org/bots/api#sendpaidmedia
 */
export type TgSendPaidMediaParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername). If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat's balance. Otherwise, they will be credited to the bot's balance.
   */
  chat_id: number | string;
  /**
   * The number of Telegram Stars that must be paid to buy access to the media; 1-10000
   */
  star_count: number;
  /**
   * A JSON-serialized array describing the media to be sent; up to 10 items
   */
  media: TgInputPaidMedia[];
  /**
   * Bot-defined paid media payload, 0-128 bytes. This will not be displayed to the user, use it for your internal processes.
   */
  payload?: string | undefined;
  /**
   * Media caption, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Mode for parsing entities in the media caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean | undefined;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean | undefined;
  /**
   * Description of the message to reply to
   */
  reply_parameters?: TgReplyParameters | undefined;
  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | TgInlineKeyboardMarkup
    | TgReplyKeyboardMarkup
    | TgReplyKeyboardRemove
    | TgForceReply
    | undefined;
};
/**
 * Parameters of {@link TgApi.sendMediaGroup} method.
 *
 * @see https://core.telegram.org/bots/api#sendmediagroup
 */
export type TgSendMediaGroupParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * A JSON-serialized array describing messages to be sent, must include 2-10 items
   */
  media: (TgInputMediaAudio | TgInputMediaDocument | TgInputMediaPhoto | TgInputMediaVideo)[];
  /**
   * Sends messages silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent messages from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean | undefined;
  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string | undefined;
  /**
   * Description of the message to reply to
   */
  reply_parameters?: TgReplyParameters | undefined;
};
/**
 * Parameters of {@link TgApi.sendLocation} method.
 *
 * @see https://core.telegram.org/bots/api#sendlocation
 */
export type TgSendLocationParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Latitude of the location
   */
  latitude: number;
  /**
   * Longitude of the location
   */
  longitude: number;
  /**
   * The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontal_accuracy?: number | undefined;
  /**
   * Period in seconds during which the location will be updated (see Live Locations, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
   */
  live_period?: number | undefined;
  /**
   * For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
   */
  heading?: number | undefined;
  /**
   * For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
   */
  proximity_alert_radius?: number | undefined;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean | undefined;
  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string | undefined;
  /**
   * Description of the message to reply to
   */
  reply_parameters?: TgReplyParameters | undefined;
  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | TgInlineKeyboardMarkup
    | TgReplyKeyboardMarkup
    | TgReplyKeyboardRemove
    | TgForceReply
    | undefined;
};
/**
 * Parameters of {@link TgApi.sendVenue} method.
 *
 * @see https://core.telegram.org/bots/api#sendvenue
 */
export type TgSendVenueParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Latitude of the venue
   */
  latitude: number;
  /**
   * Longitude of the venue
   */
  longitude: number;
  /**
   * Name of the venue
   */
  title: string;
  /**
   * Address of the venue
   */
  address: string;
  /**
   * Foursquare identifier of the venue
   */
  foursquare_id?: string | undefined;
  /**
   * Foursquare type of the venue, if known. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)
   */
  foursquare_type?: string | undefined;
  /**
   * Google Places identifier of the venue
   */
  google_place_id?: string | undefined;
  /**
   * Google Places type of the venue. (See supported types.)
   */
  google_place_type?: string | undefined;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean | undefined;
  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string | undefined;
  /**
   * Description of the message to reply to
   */
  reply_parameters?: TgReplyParameters | undefined;
  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | TgInlineKeyboardMarkup
    | TgReplyKeyboardMarkup
    | TgReplyKeyboardRemove
    | TgForceReply
    | undefined;
};
/**
 * Parameters of {@link TgApi.sendContact} method.
 *
 * @see https://core.telegram.org/bots/api#sendcontact
 */
export type TgSendContactParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Contact's phone number
   */
  phone_number: string;
  /**
   * Contact's first name
   */
  first_name: string;
  /**
   * Contact's last name
   */
  last_name?: string | undefined;
  /**
   * Additional data about the contact in the form of a vCard, 0-2048 bytes
   */
  vcard?: string | undefined;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean | undefined;
  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string | undefined;
  /**
   * Description of the message to reply to
   */
  reply_parameters?: TgReplyParameters | undefined;
  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | TgInlineKeyboardMarkup
    | TgReplyKeyboardMarkup
    | TgReplyKeyboardRemove
    | TgForceReply
    | undefined;
};
/**
 * Parameters of {@link TgApi.sendPoll} method.
 *
 * @see https://core.telegram.org/bots/api#sendpoll
 */
export type TgSendPollParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Poll question, 1-300 characters
   */
  question: string;
  /**
   * Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed
   */
  question_parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * A JSON-serialized list of special entities that appear in the poll question. It can be specified instead of question_parse_mode
   */
  question_entities?: TgMessageEntity[] | undefined;
  /**
   * A JSON-serialized list of 2-10 answer options
   */
  options: TgInputPollOption[];
  /**
   * True, if the poll needs to be anonymous, defaults to True
   */
  is_anonymous?: boolean | undefined;
  /**
   * Poll type, "quiz" or "regular", defaults to "regular"
   */
  type?: string | undefined;
  /**
   * True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False
   */
  allows_multiple_answers?: boolean | undefined;
  /**
   * 0-based identifier of the correct answer option, required for polls in quiz mode
   */
  correct_option_id?: number | undefined;
  /**
   * Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing
   */
  explanation?: string | undefined;
  /**
   * Mode for parsing entities in the explanation. See formatting options for more details.
   */
  explanation_parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * A JSON-serialized list of special entities that appear in the poll explanation. It can be specified instead of explanation_parse_mode
   */
  explanation_entities?: TgMessageEntity[] | undefined;
  /**
   * Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date.
   */
  open_period?: number | undefined;
  /**
   * Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period.
   */
  close_date?: number | undefined;
  /**
   * Pass True if the poll needs to be immediately closed. This can be useful for poll preview.
   */
  is_closed?: boolean | undefined;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean | undefined;
  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string | undefined;
  /**
   * Description of the message to reply to
   */
  reply_parameters?: TgReplyParameters | undefined;
  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | TgInlineKeyboardMarkup
    | TgReplyKeyboardMarkup
    | TgReplyKeyboardRemove
    | TgForceReply
    | undefined;
};
/**
 * Parameters of {@link TgApi.sendDice} method.
 *
 * @see https://core.telegram.org/bots/api#senddice
 */
export type TgSendDiceParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Emoji on which the dice throw animation is based. Currently, must be one of "🎲", "🎯", "🏀", "⚽", "🎳", or "🎰". Dice can have values 1-6 for "🎲", "🎯" and "🎳", values 1-5 for "🏀" and "⚽", and values 1-64 for "🎰". Defaults to "🎲"
   */
  emoji?:
    | "\uD83C\uDFB2"
    | "\uD83C\uDFAF"
    | "\uD83C\uDFC0"
    | "\u26BD"
    | "\uD83C\uDFB3"
    | "\uD83C\uDFB0"
    | undefined;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent message from forwarding
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean | undefined;
  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string | undefined;
  /**
   * Description of the message to reply to
   */
  reply_parameters?: TgReplyParameters | undefined;
  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | TgInlineKeyboardMarkup
    | TgReplyKeyboardMarkup
    | TgReplyKeyboardRemove
    | TgForceReply
    | undefined;
};
/**
 * Parameters of {@link TgApi.sendChatAction} method.
 *
 * @see https://core.telegram.org/bots/api#sendchataction
 */
export type TgSendChatActionParams = {
  /**
   * Unique identifier of the business connection on behalf of which the action will be sent
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread; for supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes.
   */
  action: string;
};
/**
 * Parameters of {@link TgApi.setMessageReaction} method.
 *
 * @see https://core.telegram.org/bots/api#setmessagereaction
 */
export type TgSetMessageReactionParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Identifier of the target message. If the message belongs to a media group, the reaction is set to the first non-deleted message in the group instead.
   */
  message_id: number;
  /**
   * A JSON-serialized list of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. Paid reactions can't be used by bots.
   */
  reaction?: TgReactionType[] | undefined;
  /**
   * Pass True to set the reaction with a big animation
   */
  is_big?: boolean | undefined;
};
/**
 * Parameters of {@link TgApi.getUserProfilePhotos} method.
 *
 * @see https://core.telegram.org/bots/api#getuserprofilephotos
 */
export type TgGetUserProfilePhotosParams = {
  /**
   * Unique identifier of the target user
   */
  user_id: number;
  /**
   * Sequential number of the first photo to be returned. By default, all photos are returned.
   */
  offset?: number | undefined;
  /**
   * Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.
   */
  limit?: number | undefined;
};
/**
 * Parameters of {@link TgApi.setUserEmojiStatus} method.
 *
 * @see https://core.telegram.org/bots/api#setuseremojistatus
 */
export type TgSetUserEmojiStatusParams = {
  /**
   * Unique identifier of the target user
   */
  user_id: number;
  /**
   * Custom emoji identifier of the emoji status to set. Pass an empty string to remove the status.
   */
  emoji_status_custom_emoji_id?: string | undefined;
  /**
   * Expiration date of the emoji status, if any
   */
  emoji_status_expiration_date?: number | undefined;
};
/**
 * Parameters of {@link TgApi.getFile} method.
 *
 * @see https://core.telegram.org/bots/api#getfile
 */
export type TgGetFileParams = {
  /**
   * File identifier to get information about
   */
  file_id: string;
};
/**
 * Parameters of {@link TgApi.banChatMember} method.
 *
 * @see https://core.telegram.org/bots/api#banchatmember
 */
export type TgBanChatMemberParams = {
  /**
   * Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier of the target user
   */
  user_id: number;
  /**
   * Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.
   */
  until_date?: number | undefined;
  /**
   * Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels.
   */
  revoke_messages?: boolean | undefined;
};
/**
 * Parameters of {@link TgApi.unbanChatMember} method.
 *
 * @see https://core.telegram.org/bots/api#unbanchatmember
 */
export type TgUnbanChatMemberParams = {
  /**
   * Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier of the target user
   */
  user_id: number;
  /**
   * Do nothing if the user is not banned
   */
  only_if_banned?: boolean | undefined;
};
/**
 * Parameters of {@link TgApi.restrictChatMember} method.
 *
 * @see https://core.telegram.org/bots/api#restrictchatmember
 */
export type TgRestrictChatMemberParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier of the target user
   */
  user_id: number;
  /**
   * A JSON-serialized object for new user permissions
   */
  permissions: TgChatPermissions;
  /**
   * Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
   */
  use_independent_chat_permissions?: boolean | undefined;
  /**
   * Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
   */
  until_date?: number | undefined;
};
/**
 * Parameters of {@link TgApi.promoteChatMember} method.
 *
 * @see https://core.telegram.org/bots/api#promotechatmember
 */
export type TgPromoteChatMemberParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier of the target user
   */
  user_id: number;
  /**
   * Pass True if the administrator's presence in the chat is hidden
   */
  is_anonymous?: boolean | undefined;
  /**
   * Pass True if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege.
   */
  can_manage_chat?: boolean | undefined;
  /**
   * Pass True if the administrator can delete messages of other users
   */
  can_delete_messages?: boolean | undefined;
  /**
   * Pass True if the administrator can manage video chats
   */
  can_manage_video_chats?: boolean | undefined;
  /**
   * Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics
   */
  can_restrict_members?: boolean | undefined;
  /**
   * Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him)
   */
  can_promote_members?: boolean | undefined;
  /**
   * Pass True if the administrator can change chat title, photo and other settings
   */
  can_change_info?: boolean | undefined;
  /**
   * Pass True if the administrator can invite new users to the chat
   */
  can_invite_users?: boolean | undefined;
  /**
   * Pass True if the administrator can post stories to the chat
   */
  can_post_stories?: boolean | undefined;
  /**
   * Pass True if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive
   */
  can_edit_stories?: boolean | undefined;
  /**
   * Pass True if the administrator can delete stories posted by other users
   */
  can_delete_stories?: boolean | undefined;
  /**
   * Pass True if the administrator can post messages in the channel, or access channel statistics; for channels only
   */
  can_post_messages?: boolean | undefined;
  /**
   * Pass True if the administrator can edit messages of other users and can pin messages; for channels only
   */
  can_edit_messages?: boolean | undefined;
  /**
   * Pass True if the administrator can pin messages; for supergroups only
   */
  can_pin_messages?: boolean | undefined;
  /**
   * Pass True if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
   */
  can_manage_topics?: boolean | undefined;
};
/**
 * Parameters of {@link TgApi.setChatAdministratorCustomTitle} method.
 *
 * @see https://core.telegram.org/bots/api#setchatadministratorcustomtitle
 */
export type TgSetChatAdministratorCustomTitleParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier of the target user
   */
  user_id: number;
  /**
   * New custom title for the administrator; 0-16 characters, emoji are not allowed
   */
  custom_title: string;
};
/**
 * Parameters of {@link TgApi.banChatSenderChat} method.
 *
 * @see https://core.telegram.org/bots/api#banchatsenderchat
 */
export type TgBanChatSenderChatParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier of the target sender chat
   */
  sender_chat_id: number;
};
/**
 * Parameters of {@link TgApi.unbanChatSenderChat} method.
 *
 * @see https://core.telegram.org/bots/api#unbanchatsenderchat
 */
export type TgUnbanChatSenderChatParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier of the target sender chat
   */
  sender_chat_id: number;
};
/**
 * Parameters of {@link TgApi.setChatPermissions} method.
 *
 * @see https://core.telegram.org/bots/api#setchatpermissions
 */
export type TgSetChatPermissionsParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
  /**
   * A JSON-serialized object for new default chat permissions
   */
  permissions: TgChatPermissions;
  /**
   * Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
   */
  use_independent_chat_permissions?: boolean | undefined;
};
/**
 * Parameters of {@link TgApi.exportChatInviteLink} method.
 *
 * @see https://core.telegram.org/bots/api#exportchatinvitelink
 */
export type TgExportChatInviteLinkParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
};
/**
 * Parameters of {@link TgApi.createChatInviteLink} method.
 *
 * @see https://core.telegram.org/bots/api#createchatinvitelink
 */
export type TgCreateChatInviteLinkParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Invite link name; 0-32 characters
   */
  name?: string | undefined;
  /**
   * Point in time (Unix timestamp) when the link will expire
   */
  expire_date?: number | undefined;
  /**
   * The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
   */
  member_limit?: number | undefined;
  /**
   * True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified
   */
  creates_join_request?: boolean | undefined;
};
/**
 * Parameters of {@link TgApi.editChatInviteLink} method.
 *
 * @see https://core.telegram.org/bots/api#editchatinvitelink
 */
export type TgEditChatInviteLinkParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * The invite link to edit
   */
  invite_link: string;
  /**
   * Invite link name; 0-32 characters
   */
  name?: string | undefined;
  /**
   * Point in time (Unix timestamp) when the link will expire
   */
  expire_date?: number | undefined;
  /**
   * The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
   */
  member_limit?: number | undefined;
  /**
   * True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified
   */
  creates_join_request?: boolean | undefined;
};
/**
 * Parameters of {@link TgApi.createChatSubscriptionInviteLink} method.
 *
 * @see https://core.telegram.org/bots/api#createchatsubscriptioninvitelink
 */
export type TgCreateChatSubscriptionInviteLinkParams = {
  /**
   * Unique identifier for the target channel chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Invite link name; 0-32 characters
   */
  name?: string | undefined;
  /**
   * The number of seconds the subscription will be active for before the next payment. Currently, it must always be 2592000 (30 days).
   */
  subscription_period: number;
  /**
   * The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat; 1-10000
   */
  subscription_price: number;
};
/**
 * Parameters of {@link TgApi.editChatSubscriptionInviteLink} method.
 *
 * @see https://core.telegram.org/bots/api#editchatsubscriptioninvitelink
 */
export type TgEditChatSubscriptionInviteLinkParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * The invite link to edit
   */
  invite_link: string;
  /**
   * Invite link name; 0-32 characters
   */
  name?: string | undefined;
};
/**
 * Parameters of {@link TgApi.revokeChatInviteLink} method.
 *
 * @see https://core.telegram.org/bots/api#revokechatinvitelink
 */
export type TgRevokeChatInviteLinkParams = {
  /**
   * Unique identifier of the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * The invite link to revoke
   */
  invite_link: string;
};
/**
 * Parameters of {@link TgApi.approveChatJoinRequest} method.
 *
 * @see https://core.telegram.org/bots/api#approvechatjoinrequest
 */
export type TgApproveChatJoinRequestParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier of the target user
   */
  user_id: number;
};
/**
 * Parameters of {@link TgApi.declineChatJoinRequest} method.
 *
 * @see https://core.telegram.org/bots/api#declinechatjoinrequest
 */
export type TgDeclineChatJoinRequestParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier of the target user
   */
  user_id: number;
};
/**
 * Parameters of {@link TgApi.setChatPhoto} method.
 *
 * @see https://core.telegram.org/bots/api#setchatphoto
 */
export type TgSetChatPhotoParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * New chat photo, uploaded using multipart/form-data
   */
  photo: TgInputFile;
};
/**
 * Parameters of {@link TgApi.deleteChatPhoto} method.
 *
 * @see https://core.telegram.org/bots/api#deletechatphoto
 */
export type TgDeleteChatPhotoParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
};
/**
 * Parameters of {@link TgApi.setChatTitle} method.
 *
 * @see https://core.telegram.org/bots/api#setchattitle
 */
export type TgSetChatTitleParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * New chat title, 1-128 characters
   */
  title: string;
};
/**
 * Parameters of {@link TgApi.setChatDescription} method.
 *
 * @see https://core.telegram.org/bots/api#setchatdescription
 */
export type TgSetChatDescriptionParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * New chat description, 0-255 characters
   */
  description?: string | undefined;
};
/**
 * Parameters of {@link TgApi.pinChatMessage} method.
 *
 * @see https://core.telegram.org/bots/api#pinchatmessage
 */
export type TgPinChatMessageParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be pinned
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Identifier of a message to pin
   */
  message_id: number;
  /**
   * Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.
   */
  disable_notification?: boolean | undefined;
};
/**
 * Parameters of {@link TgApi.unpinChatMessage} method.
 *
 * @see https://core.telegram.org/bots/api#unpinchatmessage
 */
export type TgUnpinChatMessageParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be unpinned
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Identifier of the message to unpin. Required if business_connection_id is specified. If not specified, the most recent pinned message (by sending date) will be unpinned.
   */
  message_id?: number | undefined;
};
/**
 * Parameters of {@link TgApi.unpinAllChatMessages} method.
 *
 * @see https://core.telegram.org/bots/api#unpinallchatmessages
 */
export type TgUnpinAllChatMessagesParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
};
/**
 * Parameters of {@link TgApi.leaveChat} method.
 *
 * @see https://core.telegram.org/bots/api#leavechat
 */
export type TgLeaveChatParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
   */
  chat_id: number | string;
};
/**
 * Parameters of {@link TgApi.getChat} method.
 *
 * @see https://core.telegram.org/bots/api#getchat
 */
export type TgGetChatParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
   */
  chat_id: number | string;
};
/**
 * Parameters of {@link TgApi.getChatAdministrators} method.
 *
 * @see https://core.telegram.org/bots/api#getchatadministrators
 */
export type TgGetChatAdministratorsParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
   */
  chat_id: number | string;
};
/**
 * Parameters of {@link TgApi.getChatMemberCount} method.
 *
 * @see https://core.telegram.org/bots/api#getchatmembercount
 */
export type TgGetChatMemberCountParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
   */
  chat_id: number | string;
};
/**
 * Parameters of {@link TgApi.getChatMember} method.
 *
 * @see https://core.telegram.org/bots/api#getchatmember
 */
export type TgGetChatMemberParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier of the target user
   */
  user_id: number;
};
/**
 * Parameters of {@link TgApi.setChatStickerSet} method.
 *
 * @see https://core.telegram.org/bots/api#setchatstickerset
 */
export type TgSetChatStickerSetParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
  /**
   * Name of the sticker set to be set as the group sticker set
   */
  sticker_set_name: string;
};
/**
 * Parameters of {@link TgApi.deleteChatStickerSet} method.
 *
 * @see https://core.telegram.org/bots/api#deletechatstickerset
 */
export type TgDeleteChatStickerSetParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
};
/**
 * Parameters of {@link TgApi.createForumTopic} method.
 *
 * @see https://core.telegram.org/bots/api#createforumtopic
 */
export type TgCreateForumTopicParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
  /**
   * Topic name, 1-128 characters
   */
  name: string;
  /**
   * Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F)
   */
  icon_color?: number | undefined;
  /**
   * Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers.
   */
  icon_custom_emoji_id?: string | undefined;
};
/**
 * Parameters of {@link TgApi.editForumTopic} method.
 *
 * @see https://core.telegram.org/bots/api#editforumtopic
 */
export type TgEditForumTopicParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread of the forum topic
   */
  message_thread_id: number;
  /**
   * New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept
   */
  name?: string | undefined;
  /**
   * New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept
   */
  icon_custom_emoji_id?: string | undefined;
};
/**
 * Parameters of {@link TgApi.closeForumTopic} method.
 *
 * @see https://core.telegram.org/bots/api#closeforumtopic
 */
export type TgCloseForumTopicParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread of the forum topic
   */
  message_thread_id: number;
};
/**
 * Parameters of {@link TgApi.reopenForumTopic} method.
 *
 * @see https://core.telegram.org/bots/api#reopenforumtopic
 */
export type TgReopenForumTopicParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread of the forum topic
   */
  message_thread_id: number;
};
/**
 * Parameters of {@link TgApi.deleteForumTopic} method.
 *
 * @see https://core.telegram.org/bots/api#deleteforumtopic
 */
export type TgDeleteForumTopicParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread of the forum topic
   */
  message_thread_id: number;
};
/**
 * Parameters of {@link TgApi.unpinAllForumTopicMessages} method.
 *
 * @see https://core.telegram.org/bots/api#unpinallforumtopicmessages
 */
export type TgUnpinAllForumTopicMessagesParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread of the forum topic
   */
  message_thread_id: number;
};
/**
 * Parameters of {@link TgApi.editGeneralForumTopic} method.
 *
 * @see https://core.telegram.org/bots/api#editgeneralforumtopic
 */
export type TgEditGeneralForumTopicParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
  /**
   * New topic name, 1-128 characters
   */
  name: string;
};
/**
 * Parameters of {@link TgApi.closeGeneralForumTopic} method.
 *
 * @see https://core.telegram.org/bots/api#closegeneralforumtopic
 */
export type TgCloseGeneralForumTopicParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
};
/**
 * Parameters of {@link TgApi.reopenGeneralForumTopic} method.
 *
 * @see https://core.telegram.org/bots/api#reopengeneralforumtopic
 */
export type TgReopenGeneralForumTopicParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
};
/**
 * Parameters of {@link TgApi.hideGeneralForumTopic} method.
 *
 * @see https://core.telegram.org/bots/api#hidegeneralforumtopic
 */
export type TgHideGeneralForumTopicParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
};
/**
 * Parameters of {@link TgApi.unhideGeneralForumTopic} method.
 *
 * @see https://core.telegram.org/bots/api#unhidegeneralforumtopic
 */
export type TgUnhideGeneralForumTopicParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
};
/**
 * Parameters of {@link TgApi.unpinAllGeneralForumTopicMessages} method.
 *
 * @see https://core.telegram.org/bots/api#unpinallgeneralforumtopicmessages
 */
export type TgUnpinAllGeneralForumTopicMessagesParams = {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
};
/**
 * Parameters of {@link TgApi.answerCallbackQuery} method.
 *
 * @see https://core.telegram.org/bots/api#answercallbackquery
 */
export type TgAnswerCallbackQueryParams = {
  /**
   * Unique identifier for the query to be answered
   */
  callback_query_id: string;
  /**
   * Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters
   */
  text?: string | undefined;
  /**
   * If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false.
   */
  show_alert?: boolean | undefined;
  /**
   * URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback_game button. Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter.
   */
  url?: string | undefined;
  /**
   * The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0.
   */
  cache_time?: number | undefined;
};
/**
 * Parameters of {@link TgApi.getUserChatBoosts} method.
 *
 * @see https://core.telegram.org/bots/api#getuserchatboosts
 */
export type TgGetUserChatBoostsParams = {
  /**
   * Unique identifier for the chat or username of the channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier of the target user
   */
  user_id: number;
};
/**
 * Parameters of {@link TgApi.getBusinessConnection} method.
 *
 * @see https://core.telegram.org/bots/api#getbusinessconnection
 */
export type TgGetBusinessConnectionParams = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
};
/**
 * Parameters of {@link TgApi.setMyCommands} method.
 *
 * @see https://core.telegram.org/bots/api#setmycommands
 */
export type TgSetMyCommandsParams = {
  /**
   * A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.
   */
  commands: TgBotCommand[];
  /**
   * A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.
   */
  scope?: TgBotCommandScope | undefined;
  /**
   * A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
   */
  language_code?: string | undefined;
};
/**
 * Parameters of {@link TgApi.deleteMyCommands} method.
 *
 * @see https://core.telegram.org/bots/api#deletemycommands
 */
export type TgDeleteMyCommandsParams = {
  /**
   * A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.
   */
  scope?: TgBotCommandScope | undefined;
  /**
   * A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
   */
  language_code?: string | undefined;
};
/**
 * Parameters of {@link TgApi.getMyCommands} method.
 *
 * @see https://core.telegram.org/bots/api#getmycommands
 */
export type TgGetMyCommandsParams = {
  /**
   * A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault.
   */
  scope?: TgBotCommandScope | undefined;
  /**
   * A two-letter ISO 639-1 language code or an empty string
   */
  language_code?: string | undefined;
};
/**
 * Parameters of {@link TgApi.setMyName} method.
 *
 * @see https://core.telegram.org/bots/api#setmyname
 */
export type TgSetMyNameParams = {
  /**
   * New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language.
   */
  name?: string | undefined;
  /**
   * A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name.
   */
  language_code?: string | undefined;
};
/**
 * Parameters of {@link TgApi.getMyName} method.
 *
 * @see https://core.telegram.org/bots/api#getmyname
 */
export type TgGetMyNameParams = {
  /**
   * A two-letter ISO 639-1 language code or an empty string
   */
  language_code?: string | undefined;
};
/**
 * Parameters of {@link TgApi.setMyDescription} method.
 *
 * @see https://core.telegram.org/bots/api#setmydescription
 */
export type TgSetMyDescriptionParams = {
  /**
   * New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language.
   */
  description?: string | undefined;
  /**
   * A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description.
   */
  language_code?: string | undefined;
};
/**
 * Parameters of {@link TgApi.getMyDescription} method.
 *
 * @see https://core.telegram.org/bots/api#getmydescription
 */
export type TgGetMyDescriptionParams = {
  /**
   * A two-letter ISO 639-1 language code or an empty string
   */
  language_code?: string | undefined;
};
/**
 * Parameters of {@link TgApi.setMyShortDescription} method.
 *
 * @see https://core.telegram.org/bots/api#setmyshortdescription
 */
export type TgSetMyShortDescriptionParams = {
  /**
   * New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language.
   */
  short_description?: string | undefined;
  /**
   * A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description.
   */
  language_code?: string | undefined;
};
/**
 * Parameters of {@link TgApi.getMyShortDescription} method.
 *
 * @see https://core.telegram.org/bots/api#getmyshortdescription
 */
export type TgGetMyShortDescriptionParams = {
  /**
   * A two-letter ISO 639-1 language code or an empty string
   */
  language_code?: string | undefined;
};
/**
 * Parameters of {@link TgApi.setChatMenuButton} method.
 *
 * @see https://core.telegram.org/bots/api#setchatmenubutton
 */
export type TgSetChatMenuButtonParams = {
  /**
   * Unique identifier for the target private chat. If not specified, default bot's menu button will be changed
   */
  chat_id?: number | undefined;
  /**
   * A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault
   */
  menu_button?: TgMenuButton | undefined;
};
/**
 * Parameters of {@link TgApi.getChatMenuButton} method.
 *
 * @see https://core.telegram.org/bots/api#getchatmenubutton
 */
export type TgGetChatMenuButtonParams = {
  /**
   * Unique identifier for the target private chat. If not specified, default bot's menu button will be returned
   */
  chat_id?: number | undefined;
};
/**
 * Parameters of {@link TgApi.setMyDefaultAdministratorRights} method.
 *
 * @see https://core.telegram.org/bots/api#setmydefaultadministratorrights
 */
export type TgSetMyDefaultAdministratorRightsParams = {
  /**
   * A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared.
   */
  rights?: TgChatAdministratorRights | undefined;
  /**
   * Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed.
   */
  for_channels?: boolean | undefined;
};
/**
 * Parameters of {@link TgApi.getMyDefaultAdministratorRights} method.
 *
 * @see https://core.telegram.org/bots/api#getmydefaultadministratorrights
 */
export type TgGetMyDefaultAdministratorRightsParams = {
  /**
   * Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned.
   */
  for_channels?: boolean | undefined;
};
/**
 * Parameters of {@link TgApi.editMessageText} method.
 *
 * @see https://core.telegram.org/bots/api#editmessagetext
 */
export type TgEditMessageTextParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   */
  business_connection_id?: string | undefined;
  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id?: number | string | undefined;
  /**
   * Required if inline_message_id is not specified. Identifier of the message to edit
   */
  message_id?: number | undefined;
  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id?: string | undefined;
  /**
   * New text of the message, 1-4096 characters after entities parsing
   */
  text: string;
  /**
   * Mode for parsing entities in the message text. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
   */
  entities?: TgMessageEntity[] | undefined;
  /**
   * Link preview generation options for the message
   */
  link_preview_options?: TgLinkPreviewOptions | undefined;
  /**
   * A JSON-serialized object for an inline keyboard.
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
};
/**
 * Parameters of {@link TgApi.editMessageCaption} method.
 *
 * @see https://core.telegram.org/bots/api#editmessagecaption
 */
export type TgEditMessageCaptionParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   */
  business_connection_id?: string | undefined;
  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id?: number | string | undefined;
  /**
   * Required if inline_message_id is not specified. Identifier of the message to edit
   */
  message_id?: number | undefined;
  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id?: string | undefined;
  /**
   * New caption of the message, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Mode for parsing entities in the message caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Pass True, if the caption must be shown above the message media. Supported only for animation, photo and video messages.
   */
  show_caption_above_media?: boolean | undefined;
  /**
   * A JSON-serialized object for an inline keyboard.
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
};
/**
 * Parameters of {@link TgApi.editMessageMedia} method.
 *
 * @see https://core.telegram.org/bots/api#editmessagemedia
 */
export type TgEditMessageMediaParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   */
  business_connection_id?: string | undefined;
  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id?: number | string | undefined;
  /**
   * Required if inline_message_id is not specified. Identifier of the message to edit
   */
  message_id?: number | undefined;
  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id?: string | undefined;
  /**
   * A JSON-serialized object for a new media content of the message
   */
  media: TgInputMedia;
  /**
   * A JSON-serialized object for a new inline keyboard.
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
};
/**
 * Parameters of {@link TgApi.editMessageLiveLocation} method.
 *
 * @see https://core.telegram.org/bots/api#editmessagelivelocation
 */
export type TgEditMessageLiveLocationParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   */
  business_connection_id?: string | undefined;
  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id?: number | string | undefined;
  /**
   * Required if inline_message_id is not specified. Identifier of the message to edit
   */
  message_id?: number | undefined;
  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id?: string | undefined;
  /**
   * Latitude of new location
   */
  latitude: number;
  /**
   * Longitude of new location
   */
  longitude: number;
  /**
   * New period in seconds during which the location can be updated, starting from the message send date. If 0x7FFFFFFF is specified, then the location can be updated forever. Otherwise, the new value must not exceed the current live_period by more than a day, and the live location expiration date must remain within the next 90 days. If not specified, then live_period remains unchanged
   */
  live_period?: number | undefined;
  /**
   * The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontal_accuracy?: number | undefined;
  /**
   * Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
   */
  heading?: number | undefined;
  /**
   * The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
   */
  proximity_alert_radius?: number | undefined;
  /**
   * A JSON-serialized object for a new inline keyboard.
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
};
/**
 * Parameters of {@link TgApi.stopMessageLiveLocation} method.
 *
 * @see https://core.telegram.org/bots/api#stopmessagelivelocation
 */
export type TgStopMessageLiveLocationParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   */
  business_connection_id?: string | undefined;
  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id?: number | string | undefined;
  /**
   * Required if inline_message_id is not specified. Identifier of the message with live location to stop
   */
  message_id?: number | undefined;
  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id?: string | undefined;
  /**
   * A JSON-serialized object for a new inline keyboard.
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
};
/**
 * Parameters of {@link TgApi.editMessageReplyMarkup} method.
 *
 * @see https://core.telegram.org/bots/api#editmessagereplymarkup
 */
export type TgEditMessageReplyMarkupParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   */
  business_connection_id?: string | undefined;
  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id?: number | string | undefined;
  /**
   * Required if inline_message_id is not specified. Identifier of the message to edit
   */
  message_id?: number | undefined;
  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id?: string | undefined;
  /**
   * A JSON-serialized object for an inline keyboard.
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
};
/**
 * Parameters of {@link TgApi.stopPoll} method.
 *
 * @see https://core.telegram.org/bots/api#stoppoll
 */
export type TgStopPollParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message to be edited was sent
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Identifier of the original message with the poll
   */
  message_id: number;
  /**
   * A JSON-serialized object for a new message inline keyboard.
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
};
/**
 * Parameters of {@link TgApi.deleteMessage} method.
 *
 * @see https://core.telegram.org/bots/api#deletemessage
 */
export type TgDeleteMessageParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Identifier of the message to delete
   */
  message_id: number;
};
/**
 * Parameters of {@link TgApi.deleteMessages} method.
 *
 * @see https://core.telegram.org/bots/api#deletemessages
 */
export type TgDeleteMessagesParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * A JSON-serialized list of 1-100 identifiers of messages to delete. See deleteMessage for limitations on which messages can be deleted
   */
  message_ids: number[];
};
/**
 * Parameters of {@link TgApi.sendGift} method.
 *
 * @see https://core.telegram.org/bots/api#sendgift
 */
export type TgSendGiftParams = {
  /**
   * Required if chat_id is not specified. Unique identifier of the target user who will receive the gift.
   */
  user_id?: number | undefined;
  /**
   * Required if user_id is not specified. Unique identifier for the chat or username of the channel (in the format @channelusername) that will receive the gift.
   */
  chat_id?: number | string | undefined;
  /**
   * Identifier of the gift
   */
  gift_id: string;
  /**
   * Pass True to pay for the gift upgrade from the bot's balance, thereby making the upgrade free for the receiver
   */
  pay_for_upgrade?: boolean | undefined;
  /**
   * Text that will be shown along with the gift; 0-128 characters
   */
  text?: string | undefined;
  /**
   * Mode for parsing entities in the text. See formatting options for more details. Entities other than "bold", "italic", "underline", "strikethrough", "spoiler", and "custom_emoji" are ignored.
   */
  text_parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text_parse_mode. Entities other than "bold", "italic", "underline", "strikethrough", "spoiler", and "custom_emoji" are ignored.
   */
  text_entities?: TgMessageEntity[] | undefined;
};
/**
 * Parameters of {@link TgApi.giftPremiumSubscription} method.
 *
 * @see https://core.telegram.org/bots/api#giftpremiumsubscription
 */
export type TgGiftPremiumSubscriptionParams = {
  /**
   * Unique identifier of the target user who will receive a Telegram Premium subscription
   */
  user_id: number;
  /**
   * Number of months the Telegram Premium subscription will be active for the user; must be one of 3, 6, or 12
   */
  month_count: number;
  /**
   * Number of Telegram Stars to pay for the Telegram Premium subscription; must be 1000 for 3 months, 1500 for 6 months, and 2500 for 12 months
   */
  star_count: number;
  /**
   * Text that will be shown along with the service message about the subscription; 0-128 characters
   */
  text?: string | undefined;
  /**
   * Mode for parsing entities in the text. See formatting options for more details. Entities other than "bold", "italic", "underline", "strikethrough", "spoiler", and "custom_emoji" are ignored.
   */
  text_parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text_parse_mode. Entities other than "bold", "italic", "underline", "strikethrough", "spoiler", and "custom_emoji" are ignored.
   */
  text_entities?: TgMessageEntity[] | undefined;
};
/**
 * Parameters of {@link TgApi.verifyUser} method.
 *
 * @see https://core.telegram.org/bots/api#verifyuser
 */
export type TgVerifyUserParams = {
  /**
   * Unique identifier of the target user
   */
  user_id: number;
  /**
   * Custom description for the verification; 0-70 characters. Must be empty if the organization isn't allowed to provide a custom verification description.
   */
  custom_description?: string | undefined;
};
/**
 * Parameters of {@link TgApi.verifyChat} method.
 *
 * @see https://core.telegram.org/bots/api#verifychat
 */
export type TgVerifyChatParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Custom description for the verification; 0-70 characters. Must be empty if the organization isn't allowed to provide a custom verification description.
   */
  custom_description?: string | undefined;
};
/**
 * Parameters of {@link TgApi.removeUserVerification} method.
 *
 * @see https://core.telegram.org/bots/api#removeuserverification
 */
export type TgRemoveUserVerificationParams = {
  /**
   * Unique identifier of the target user
   */
  user_id: number;
};
/**
 * Parameters of {@link TgApi.removeChatVerification} method.
 *
 * @see https://core.telegram.org/bots/api#removechatverification
 */
export type TgRemoveChatVerificationParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
};
/**
 * Parameters of {@link TgApi.readBusinessMessage} method.
 *
 * @see https://core.telegram.org/bots/api#readbusinessmessage
 */
export type TgReadBusinessMessageParams = {
  /**
   * Unique identifier of the business connection on behalf of which to read the message
   */
  business_connection_id: string;
  /**
   * Unique identifier of the chat in which the message was received. The chat must have been active in the last 24 hours.
   */
  chat_id: number;
  /**
   * Unique identifier of the message to mark as read
   */
  message_id: number;
};
/**
 * Parameters of {@link TgApi.deleteBusinessMessages} method.
 *
 * @see https://core.telegram.org/bots/api#deletebusinessmessages
 */
export type TgDeleteBusinessMessagesParams = {
  /**
   * Unique identifier of the business connection on behalf of which to delete the messages
   */
  business_connection_id: string;
  /**
   * A JSON-serialized list of 1-100 identifiers of messages to delete. All messages must be from the same chat. See deleteMessage for limitations on which messages can be deleted
   */
  message_ids: number[];
};
/**
 * Parameters of {@link TgApi.setBusinessAccountName} method.
 *
 * @see https://core.telegram.org/bots/api#setbusinessaccountname
 */
export type TgSetBusinessAccountNameParams = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
  /**
   * The new value of the first name for the business account; 1-64 characters
   */
  first_name: string;
  /**
   * The new value of the last name for the business account; 0-64 characters
   */
  last_name?: string | undefined;
};
/**
 * Parameters of {@link TgApi.setBusinessAccountUsername} method.
 *
 * @see https://core.telegram.org/bots/api#setbusinessaccountusername
 */
export type TgSetBusinessAccountUsernameParams = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
  /**
   * The new value of the username for the business account; 0-32 characters
   */
  username?: string | undefined;
};
/**
 * Parameters of {@link TgApi.setBusinessAccountBio} method.
 *
 * @see https://core.telegram.org/bots/api#setbusinessaccountbio
 */
export type TgSetBusinessAccountBioParams = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
  /**
   * The new value of the bio for the business account; 0-140 characters
   */
  bio?: string | undefined;
};
/**
 * Parameters of {@link TgApi.setBusinessAccountProfilePhoto} method.
 *
 * @see https://core.telegram.org/bots/api#setbusinessaccountprofilephoto
 */
export type TgSetBusinessAccountProfilePhotoParams = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
  /**
   * The new profile photo to set
   */
  photo: TgInputProfilePhoto;
  /**
   * Pass True to set the public photo, which will be visible even if the main photo is hidden by the business account's privacy settings. An account can have only one public photo.
   */
  is_public?: boolean | undefined;
};
/**
 * Parameters of {@link TgApi.removeBusinessAccountProfilePhoto} method.
 *
 * @see https://core.telegram.org/bots/api#removebusinessaccountprofilephoto
 */
export type TgRemoveBusinessAccountProfilePhotoParams = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
  /**
   * Pass True to remove the public photo, which is visible even if the main photo is hidden by the business account's privacy settings. After the main photo is removed, the previous profile photo (if present) becomes the main photo.
   */
  is_public?: boolean | undefined;
};
/**
 * Parameters of {@link TgApi.setBusinessAccountGiftSettings} method.
 *
 * @see https://core.telegram.org/bots/api#setbusinessaccountgiftsettings
 */
export type TgSetBusinessAccountGiftSettingsParams = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
  /**
   * Pass True, if a button for sending a gift to the user or by the business account must always be shown in the input field
   */
  show_gift_button: boolean;
  /**
   * Types of gifts accepted by the business account
   */
  accepted_gift_types: TgAcceptedGiftTypes;
};
/**
 * Parameters of {@link TgApi.getBusinessAccountStarBalance} method.
 *
 * @see https://core.telegram.org/bots/api#getbusinessaccountstarbalance
 */
export type TgGetBusinessAccountStarBalanceParams = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
};
/**
 * Parameters of {@link TgApi.transferBusinessAccountStars} method.
 *
 * @see https://core.telegram.org/bots/api#transferbusinessaccountstars
 */
export type TgTransferBusinessAccountStarsParams = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
  /**
   * Number of Telegram Stars to transfer; 1-10000
   */
  star_count: number;
};
/**
 * Parameters of {@link TgApi.getBusinessAccountGifts} method.
 *
 * @see https://core.telegram.org/bots/api#getbusinessaccountgifts
 */
export type TgGetBusinessAccountGiftsParams = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
  /**
   * Pass True to exclude gifts that aren't saved to the account's profile page
   */
  exclude_unsaved?: boolean | undefined;
  /**
   * Pass True to exclude gifts that are saved to the account's profile page
   */
  exclude_saved?: boolean | undefined;
  /**
   * Pass True to exclude gifts that can be purchased an unlimited number of times
   */
  exclude_unlimited?: boolean | undefined;
  /**
   * Pass True to exclude gifts that can be purchased a limited number of times
   */
  exclude_limited?: boolean | undefined;
  /**
   * Pass True to exclude unique gifts
   */
  exclude_unique?: boolean | undefined;
  /**
   * Pass True to sort results by gift price instead of send date. Sorting is applied before pagination.
   */
  sort_by_price?: boolean | undefined;
  /**
   * Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results
   */
  offset?: string | undefined;
  /**
   * The maximum number of gifts to be returned; 1-100. Defaults to 100
   */
  limit?: number | undefined;
};
/**
 * Parameters of {@link TgApi.convertGiftToStars} method.
 *
 * @see https://core.telegram.org/bots/api#convertgifttostars
 */
export type TgConvertGiftToStarsParams = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
  /**
   * Unique identifier of the regular gift that should be converted to Telegram Stars
   */
  owned_gift_id: string;
};
/**
 * Parameters of {@link TgApi.upgradeGift} method.
 *
 * @see https://core.telegram.org/bots/api#upgradegift
 */
export type TgUpgradeGiftParams = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
  /**
   * Unique identifier of the regular gift that should be upgraded to a unique one
   */
  owned_gift_id: string;
  /**
   * Pass True to keep the original gift text, sender and receiver in the upgraded gift
   */
  keep_original_details?: boolean | undefined;
  /**
   * The amount of Telegram Stars that will be paid for the upgrade from the business account balance. If gift.prepaid_upgrade_star_count > 0, then pass 0, otherwise, the can_transfer_stars business bot right is required and gift.upgrade_star_count must be passed.
   */
  star_count?: number | undefined;
};
/**
 * Parameters of {@link TgApi.transferGift} method.
 *
 * @see https://core.telegram.org/bots/api#transfergift
 */
export type TgTransferGiftParams = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
  /**
   * Unique identifier of the regular gift that should be transferred
   */
  owned_gift_id: string;
  /**
   * Unique identifier of the chat which will own the gift. The chat must be active in the last 24 hours.
   */
  new_owner_chat_id: number;
  /**
   * The amount of Telegram Stars that will be paid for the transfer from the business account balance. If positive, then the can_transfer_stars business bot right is required.
   */
  star_count?: number | undefined;
};
/**
 * Parameters of {@link TgApi.postStory} method.
 *
 * @see https://core.telegram.org/bots/api#poststory
 */
export type TgPostStoryParams = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
  /**
   * Content of the story
   */
  content: TgInputStoryContent;
  /**
   * Period after which the story is moved to the archive, in seconds; must be one of 6 * 3600, 12 * 3600, 86400, or 2 * 86400
   */
  active_period: number;
  /**
   * Caption of the story, 0-2048 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Mode for parsing entities in the story caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * A JSON-serialized list of clickable areas to be shown on the story
   */
  areas?: TgStoryArea[] | undefined;
  /**
   * Pass True to keep the story accessible after it expires
   */
  post_to_chat_page?: boolean | undefined;
  /**
   * Pass True if the content of the story must be protected from forwarding and screenshotting
   */
  protect_content?: boolean | undefined;
};
/**
 * Parameters of {@link TgApi.editStory} method.
 *
 * @see https://core.telegram.org/bots/api#editstory
 */
export type TgEditStoryParams = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
  /**
   * Unique identifier of the story to edit
   */
  story_id: number;
  /**
   * Content of the story
   */
  content: TgInputStoryContent;
  /**
   * Caption of the story, 0-2048 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Mode for parsing entities in the story caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * A JSON-serialized list of clickable areas to be shown on the story
   */
  areas?: TgStoryArea[] | undefined;
};
/**
 * Parameters of {@link TgApi.deleteStory} method.
 *
 * @see https://core.telegram.org/bots/api#deletestory
 */
export type TgDeleteStoryParams = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
  /**
   * Unique identifier of the story to delete
   */
  story_id: number;
};
/**
 * Parameters of {@link TgApi.sendSticker} method.
 *
 * @see https://core.telegram.org/bots/api#sendsticker
 */
export type TgSendStickerParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files. Video and animated stickers can't be sent via an HTTP URL.
   */
  sticker: TgInputFile | string;
  /**
   * Emoji associated with the sticker; only for just uploaded stickers
   */
  emoji?: string | undefined;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean | undefined;
  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string | undefined;
  /**
   * Description of the message to reply to
   */
  reply_parameters?: TgReplyParameters | undefined;
  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
   */
  reply_markup?:
    | TgInlineKeyboardMarkup
    | TgReplyKeyboardMarkup
    | TgReplyKeyboardRemove
    | TgForceReply
    | undefined;
};
/**
 * Parameters of {@link TgApi.getStickerSet} method.
 *
 * @see https://core.telegram.org/bots/api#getstickerset
 */
export type TgGetStickerSetParams = {
  /**
   * Name of the sticker set
   */
  name: string;
};
/**
 * Parameters of {@link TgApi.getCustomEmojiStickers} method.
 *
 * @see https://core.telegram.org/bots/api#getcustomemojistickers
 */
export type TgGetCustomEmojiStickersParams = {
  /**
   * A JSON-serialized list of custom emoji identifiers. At most 200 custom emoji identifiers can be specified.
   */
  custom_emoji_ids: string[];
};
/**
 * Parameters of {@link TgApi.uploadStickerFile} method.
 *
 * @see https://core.telegram.org/bots/api#uploadstickerfile
 */
export type TgUploadStickerFileParams = {
  /**
   * User identifier of sticker file owner
   */
  user_id: number;
  /**
   * A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See https://core.telegram.org/stickers for technical requirements. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  sticker: TgInputFile;
  /**
   * Format of the sticker, must be one of "static", "animated", "video"
   */
  sticker_format: "static" | "animated" | "video";
};
/**
 * Parameters of {@link TgApi.createNewStickerSet} method.
 *
 * @see https://core.telegram.org/bots/api#createnewstickerset
 */
export type TgCreateNewStickerSetParams = {
  /**
   * User identifier of created sticker set owner
   */
  user_id: number;
  /**
   * Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters.
   */
  name: string;
  /**
   * Sticker set title, 1-64 characters
   */
  title: string;
  /**
   * A JSON-serialized list of 1-50 initial stickers to be added to the sticker set
   */
  stickers: TgInputSticker[];
  /**
   * Type of stickers in the set, pass "regular", "mask", or "custom_emoji". By default, a regular sticker set is created.
   */
  sticker_type?: string | undefined;
  /**
   * Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only
   */
  needs_repainting?: boolean | undefined;
};
/**
 * Parameters of {@link TgApi.addStickerToSet} method.
 *
 * @see https://core.telegram.org/bots/api#addstickertoset
 */
export type TgAddStickerToSetParams = {
  /**
   * User identifier of sticker set owner
   */
  user_id: number;
  /**
   * Sticker set name
   */
  name: string;
  /**
   * A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed.
   */
  sticker: TgInputSticker;
};
/**
 * Parameters of {@link TgApi.setStickerPositionInSet} method.
 *
 * @see https://core.telegram.org/bots/api#setstickerpositioninset
 */
export type TgSetStickerPositionInSetParams = {
  /**
   * File identifier of the sticker
   */
  sticker: string;
  /**
   * New sticker position in the set, zero-based
   */
  position: number;
};
/**
 * Parameters of {@link TgApi.deleteStickerFromSet} method.
 *
 * @see https://core.telegram.org/bots/api#deletestickerfromset
 */
export type TgDeleteStickerFromSetParams = {
  /**
   * File identifier of the sticker
   */
  sticker: string;
};
/**
 * Parameters of {@link TgApi.replaceStickerInSet} method.
 *
 * @see https://core.telegram.org/bots/api#replacestickerinset
 */
export type TgReplaceStickerInSetParams = {
  /**
   * User identifier of the sticker set owner
   */
  user_id: number;
  /**
   * Sticker set name
   */
  name: string;
  /**
   * File identifier of the replaced sticker
   */
  old_sticker: string;
  /**
   * A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set remains unchanged.
   */
  sticker: TgInputSticker;
};
/**
 * Parameters of {@link TgApi.setStickerEmojiList} method.
 *
 * @see https://core.telegram.org/bots/api#setstickeremojilist
 */
export type TgSetStickerEmojiListParams = {
  /**
   * File identifier of the sticker
   */
  sticker: string;
  /**
   * A JSON-serialized list of 1-20 emoji associated with the sticker
   */
  emoji_list: string[];
};
/**
 * Parameters of {@link TgApi.setStickerKeywords} method.
 *
 * @see https://core.telegram.org/bots/api#setstickerkeywords
 */
export type TgSetStickerKeywordsParams = {
  /**
   * File identifier of the sticker
   */
  sticker: string;
  /**
   * A JSON-serialized list of 0-20 search keywords for the sticker with total length of up to 64 characters
   */
  keywords?: string[] | undefined;
};
/**
 * Parameters of {@link TgApi.setStickerMaskPosition} method.
 *
 * @see https://core.telegram.org/bots/api#setstickermaskposition
 */
export type TgSetStickerMaskPositionParams = {
  /**
   * File identifier of the sticker
   */
  sticker: string;
  /**
   * A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position.
   */
  mask_position?: TgMaskPosition | undefined;
};
/**
 * Parameters of {@link TgApi.setStickerSetTitle} method.
 *
 * @see https://core.telegram.org/bots/api#setstickersettitle
 */
export type TgSetStickerSetTitleParams = {
  /**
   * Sticker set name
   */
  name: string;
  /**
   * Sticker set title, 1-64 characters
   */
  title: string;
};
/**
 * Parameters of {@link TgApi.setStickerSetThumbnail} method.
 *
 * @see https://core.telegram.org/bots/api#setstickersetthumbnail
 */
export type TgSetStickerSetThumbnailParams = {
  /**
   * Sticker set name
   */
  name: string;
  /**
   * User identifier of the sticker set owner
   */
  user_id: number;
  /**
   * A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size (see https://core.telegram.org/stickers#animation-requirements for animated sticker technical requirements), or a .WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files: https://core.telegram.org/bots/api#sending-files. Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail.
   */
  thumbnail?: TgInputFile | string | undefined;
  /**
   * Format of the thumbnail, must be one of "static" for a .WEBP or .PNG image, "animated" for a .TGS animation, or "video" for a .WEBM video
   */
  format: "static" | "animated" | "video";
};
/**
 * Parameters of {@link TgApi.setCustomEmojiStickerSetThumbnail} method.
 *
 * @see https://core.telegram.org/bots/api#setcustomemojistickersetthumbnail
 */
export type TgSetCustomEmojiStickerSetThumbnailParams = {
  /**
   * Sticker set name
   */
  name: string;
  /**
   * Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail.
   */
  custom_emoji_id?: string | undefined;
};
/**
 * Parameters of {@link TgApi.deleteStickerSet} method.
 *
 * @see https://core.telegram.org/bots/api#deletestickerset
 */
export type TgDeleteStickerSetParams = {
  /**
   * Sticker set name
   */
  name: string;
};
/**
 * Parameters of {@link TgApi.answerInlineQuery} method.
 *
 * @see https://core.telegram.org/bots/api#answerinlinequery
 */
export type TgAnswerInlineQueryParams = {
  /**
   * Unique identifier for the answered query
   */
  inline_query_id: string;
  /**
   * A JSON-serialized array of results for the inline query
   */
  results: TgInlineQueryResult[];
  /**
   * The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.
   */
  cache_time?: number | undefined;
  /**
   * Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query.
   */
  is_personal?: boolean | undefined;
  /**
   * Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.
   */
  next_offset?: string | undefined;
  /**
   * A JSON-serialized object describing a button to be shown above inline query results
   */
  button?: TgInlineQueryResultsButton | undefined;
};
/**
 * Parameters of {@link TgApi.answerWebAppQuery} method.
 *
 * @see https://core.telegram.org/bots/api#answerwebappquery
 */
export type TgAnswerWebAppQueryParams = {
  /**
   * Unique identifier for the query to be answered
   */
  web_app_query_id: string;
  /**
   * A JSON-serialized object describing the message to be sent
   */
  result: TgInlineQueryResult;
};
/**
 * Parameters of {@link TgApi.savePreparedInlineMessage} method.
 *
 * @see https://core.telegram.org/bots/api#savepreparedinlinemessage
 */
export type TgSavePreparedInlineMessageParams = {
  /**
   * Unique identifier of the target user that can use the prepared message
   */
  user_id: number;
  /**
   * A JSON-serialized object describing the message to be sent
   */
  result: TgInlineQueryResult;
  /**
   * Pass True if the message can be sent to private chats with users
   */
  allow_user_chats?: boolean | undefined;
  /**
   * Pass True if the message can be sent to private chats with bots
   */
  allow_bot_chats?: boolean | undefined;
  /**
   * Pass True if the message can be sent to group and supergroup chats
   */
  allow_group_chats?: boolean | undefined;
  /**
   * Pass True if the message can be sent to channel chats
   */
  allow_channel_chats?: boolean | undefined;
};
/**
 * Parameters of {@link TgApi.sendInvoice} method.
 *
 * @see https://core.telegram.org/bots/api#sendinvoice
 */
export type TgSendInvoiceParams = {
  /**
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Product name, 1-32 characters
   */
  title: string;
  /**
   * Product description, 1-255 characters
   */
  description: string;
  /**
   * Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.
   */
  payload: string;
  /**
   * Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.
   */
  provider_token?: string | undefined;
  /**
   * Three-letter ISO 4217 currency code, see more on currencies. Pass "XTR" for payments in Telegram Stars.
   */
  currency: string;
  /**
   * Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars.
   */
  prices: TgLabeledPrice[];
  /**
   * The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars.
   */
  max_tip_amount?: number | undefined;
  /**
   * A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
   */
  suggested_tip_amounts?: number[] | undefined;
  /**
   * Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter
   */
  start_parameter?: string | undefined;
  /**
   * JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
   */
  provider_data?: string | undefined;
  /**
   * URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.
   */
  photo_url?: string | undefined;
  /**
   * Photo size in bytes
   */
  photo_size?: number | undefined;
  /**
   * Photo width
   */
  photo_width?: number | undefined;
  /**
   * Photo height
   */
  photo_height?: number | undefined;
  /**
   * Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars.
   */
  need_name?: boolean | undefined;
  /**
   * Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars.
   */
  need_phone_number?: boolean | undefined;
  /**
   * Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars.
   */
  need_email?: boolean | undefined;
  /**
   * Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.
   */
  need_shipping_address?: boolean | undefined;
  /**
   * Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars.
   */
  send_phone_number_to_provider?: boolean | undefined;
  /**
   * Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars.
   */
  send_email_to_provider?: boolean | undefined;
  /**
   * Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.
   */
  is_flexible?: boolean | undefined;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean | undefined;
  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string | undefined;
  /**
   * Description of the message to reply to
   */
  reply_parameters?: TgReplyParameters | undefined;
  /**
   * A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button.
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
};
/**
 * Parameters of {@link TgApi.createInvoiceLink} method.
 *
 * @see https://core.telegram.org/bots/api#createinvoicelink
 */
export type TgCreateInvoiceLinkParams = {
  /**
   * Unique identifier of the business connection on behalf of which the link will be created. For payments in Telegram Stars only.
   */
  business_connection_id?: string | undefined;
  /**
   * Product name, 1-32 characters
   */
  title: string;
  /**
   * Product description, 1-255 characters
   */
  description: string;
  /**
   * Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.
   */
  payload: string;
  /**
   * Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.
   */
  provider_token?: string | undefined;
  /**
   * Three-letter ISO 4217 currency code, see more on currencies. Pass "XTR" for payments in Telegram Stars.
   */
  currency: string;
  /**
   * Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars.
   */
  prices: TgLabeledPrice[];
  /**
   * The number of seconds the subscription will be active for before the next payment. The currency must be set to "XTR" (Telegram Stars) if the parameter is used. Currently, it must always be 2592000 (30 days) if specified. Any number of subscriptions can be active for a given bot at the same time, including multiple concurrent subscriptions from the same user. Subscription price must no exceed 10000 Telegram Stars.
   */
  subscription_period?: number | undefined;
  /**
   * The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars.
   */
  max_tip_amount?: number | undefined;
  /**
   * A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
   */
  suggested_tip_amounts?: number[] | undefined;
  /**
   * JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
   */
  provider_data?: string | undefined;
  /**
   * URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.
   */
  photo_url?: string | undefined;
  /**
   * Photo size in bytes
   */
  photo_size?: number | undefined;
  /**
   * Photo width
   */
  photo_width?: number | undefined;
  /**
   * Photo height
   */
  photo_height?: number | undefined;
  /**
   * Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars.
   */
  need_name?: boolean | undefined;
  /**
   * Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars.
   */
  need_phone_number?: boolean | undefined;
  /**
   * Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars.
   */
  need_email?: boolean | undefined;
  /**
   * Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.
   */
  need_shipping_address?: boolean | undefined;
  /**
   * Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars.
   */
  send_phone_number_to_provider?: boolean | undefined;
  /**
   * Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars.
   */
  send_email_to_provider?: boolean | undefined;
  /**
   * Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.
   */
  is_flexible?: boolean | undefined;
};
/**
 * Parameters of {@link TgApi.answerShippingQuery} method.
 *
 * @see https://core.telegram.org/bots/api#answershippingquery
 */
export type TgAnswerShippingQueryParams = {
  /**
   * Unique identifier for the query to be answered
   */
  shipping_query_id: string;
  /**
   * Pass True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)
   */
  ok: boolean;
  /**
   * Required if ok is True. A JSON-serialized array of available shipping options.
   */
  shipping_options?: TgShippingOption[] | undefined;
  /**
   * Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable"). Telegram will display this message to the user.
   */
  error_message?: string | undefined;
};
/**
 * Parameters of {@link TgApi.answerPreCheckoutQuery} method.
 *
 * @see https://core.telegram.org/bots/api#answerprecheckoutquery
 */
export type TgAnswerPreCheckoutQueryParams = {
  /**
   * Unique identifier for the query to be answered
   */
  pre_checkout_query_id: string;
  /**
   * Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems.
   */
  ok: boolean;
  /**
   * Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user.
   */
  error_message?: string | undefined;
};
/**
 * Parameters of {@link TgApi.getStarTransactions} method.
 *
 * @see https://core.telegram.org/bots/api#getstartransactions
 */
export type TgGetStarTransactionsParams = {
  /**
   * Number of transactions to skip in the response
   */
  offset?: number | undefined;
  /**
   * The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100.
   */
  limit?: number | undefined;
};
/**
 * Parameters of {@link TgApi.refundStarPayment} method.
 *
 * @see https://core.telegram.org/bots/api#refundstarpayment
 */
export type TgRefundStarPaymentParams = {
  /**
   * Identifier of the user whose payment will be refunded
   */
  user_id: number;
  /**
   * Telegram payment identifier
   */
  telegram_payment_charge_id: string;
};
/**
 * Parameters of {@link TgApi.editUserStarSubscription} method.
 *
 * @see https://core.telegram.org/bots/api#edituserstarsubscription
 */
export type TgEditUserStarSubscriptionParams = {
  /**
   * Identifier of the user whose subscription will be edited
   */
  user_id: number;
  /**
   * Telegram payment identifier for the subscription
   */
  telegram_payment_charge_id: string;
  /**
   * Pass True to cancel extension of the user subscription; the subscription must be active up to the end of the current subscription period. Pass False to allow the user to re-enable a subscription that was previously canceled by the bot.
   */
  is_canceled: boolean;
};
/**
 * Parameters of {@link TgApi.setPassportDataErrors} method.
 *
 * @see https://core.telegram.org/bots/api#setpassportdataerrors
 */
export type TgSetPassportDataErrorsParams = {
  /**
   * User identifier
   */
  user_id: number;
  /**
   * A JSON-serialized array describing the errors
   */
  errors: TgPassportElementError[];
};
/**
 * Parameters of {@link TgApi.sendGame} method.
 *
 * @see https://core.telegram.org/bots/api#sendgame
 */
export type TgSendGameParams = {
  /**
   * Unique identifier of the business connection on behalf of which the message will be sent
   */
  business_connection_id?: string | undefined;
  /**
   * Unique identifier for the target chat
   */
  chat_id: number;
  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather.
   */
  game_short_name: string;
  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean | undefined;
  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protect_content?: boolean | undefined;
  /**
   * Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
   */
  allow_paid_broadcast?: boolean | undefined;
  /**
   * Unique identifier of the message effect to be added to the message; for private chats only
   */
  message_effect_id?: string | undefined;
  /**
   * Description of the message to reply to
   */
  reply_parameters?: TgReplyParameters | undefined;
  /**
   * A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game.
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
};
/**
 * Parameters of {@link TgApi.setGameScore} method.
 *
 * @see https://core.telegram.org/bots/api#setgamescore
 */
export type TgSetGameScoreParams = {
  /**
   * User identifier
   */
  user_id: number;
  /**
   * New score, must be non-negative
   */
  score: number;
  /**
   * Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters
   */
  force?: boolean | undefined;
  /**
   * Pass True if the game message should not be automatically edited to include the current scoreboard
   */
  disable_edit_message?: boolean | undefined;
  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat
   */
  chat_id?: number | undefined;
  /**
   * Required if inline_message_id is not specified. Identifier of the sent message
   */
  message_id?: number | undefined;
  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id?: string | undefined;
};
/**
 * Parameters of {@link TgApi.getGameHighScores} method.
 *
 * @see https://core.telegram.org/bots/api#getgamehighscores
 */
export type TgGetGameHighScoresParams = {
  /**
   * Target user id
   */
  user_id: number;
  /**
   * Required if inline_message_id is not specified. Unique identifier for the target chat
   */
  chat_id?: number | undefined;
  /**
   * Required if inline_message_id is not specified. Identifier of the sent message
   */
  message_id?: number | undefined;
  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline message
   */
  inline_message_id?: string | undefined;
};
/**
 * This object represents an incoming update.
 *
 * At most one of the optional parameters can be present in any given update.
 *
 * @see https://core.telegram.org/bots/api#update
 */
export type TgUpdate = {
  /**
   * The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This identifier becomes especially handy if you're using webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.
   */
  update_id: number;
  /**
   * Optional. New incoming message of any kind - text, photo, sticker, etc.
   */
  message?: TgMessage | undefined;
  /**
   * Optional. New version of a message that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.
   */
  edited_message?: TgMessage | undefined;
  /**
   * Optional. New incoming channel post of any kind - text, photo, sticker, etc.
   */
  channel_post?: TgMessage | undefined;
  /**
   * Optional. New version of a channel post that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.
   */
  edited_channel_post?: TgMessage | undefined;
  /**
   * Optional. The bot was connected to or disconnected from a business account, or a user edited an existing connection with the bot
   */
  business_connection?: TgBusinessConnection | undefined;
  /**
   * Optional. New message from a connected business account
   */
  business_message?: TgMessage | undefined;
  /**
   * Optional. New version of a message from a connected business account
   */
  edited_business_message?: TgMessage | undefined;
  /**
   * Optional. Messages were deleted from a connected business account
   */
  deleted_business_messages?: TgBusinessMessagesDeleted | undefined;
  /**
   * Optional. A reaction to a message was changed by a user. The bot must be an administrator in the chat and must explicitly specify "message_reaction" in the list of allowed_updates to receive these updates. The update isn't received for reactions set by bots.
   */
  message_reaction?: TgMessageReactionUpdated | undefined;
  /**
   * Optional. Reactions to a message with anonymous reactions were changed. The bot must be an administrator in the chat and must explicitly specify "message_reaction_count" in the list of allowed_updates to receive these updates. The updates are grouped and can be sent with delay up to a few minutes.
   */
  message_reaction_count?: TgMessageReactionCountUpdated | undefined;
  /**
   * Optional. New incoming inline query
   */
  inline_query?: TgInlineQuery | undefined;
  /**
   * Optional. The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot.
   */
  chosen_inline_result?: TgChosenInlineResult | undefined;
  /**
   * Optional. New incoming callback query
   */
  callback_query?: TgCallbackQuery | undefined;
  /**
   * Optional. New incoming shipping query. Only for invoices with flexible price
   */
  shipping_query?: TgShippingQuery | undefined;
  /**
   * Optional. New incoming pre-checkout query. Contains full information about checkout
   */
  pre_checkout_query?: TgPreCheckoutQuery | undefined;
  /**
   * Optional. A user purchased paid media with a non-empty payload sent by the bot in a non-channel chat
   */
  purchased_paid_media?: TgPaidMediaPurchased | undefined;
  /**
   * Optional. New poll state. Bots receive only updates about manually stopped polls and polls, which are sent by the bot
   */
  poll?: TgPoll | undefined;
  /**
   * Optional. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself.
   */
  poll_answer?: TgPollAnswer | undefined;
  /**
   * Optional. The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user.
   */
  my_chat_member?: TgChatMemberUpdated | undefined;
  /**
   * Optional. A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify "chat_member" in the list of allowed_updates to receive these updates.
   */
  chat_member?: TgChatMemberUpdated | undefined;
  /**
   * Optional. A request to join the chat has been sent. The bot must have the can_invite_users administrator right in the chat to receive these updates.
   */
  chat_join_request?: TgChatJoinRequest | undefined;
  /**
   * Optional. A chat boost was added or changed. The bot must be an administrator in the chat to receive these updates.
   */
  chat_boost?: TgChatBoostUpdated | undefined;
  /**
   * Optional. A boost was removed from a chat. The bot must be an administrator in the chat to receive these updates.
   */
  removed_chat_boost?: TgChatBoostRemoved | undefined;
};
/**
 * Describes the current status of a webhook.
 *
 * @see https://core.telegram.org/bots/api#webhookinfo
 */
export type TgWebhookInfo = {
  /**
   * Webhook URL, may be empty if webhook is not set up
   */
  url: string;
  /**
   * True, if a custom certificate was provided for webhook certificate checks
   */
  has_custom_certificate: boolean;
  /**
   * Number of updates awaiting delivery
   */
  pending_update_count: number;
  /**
   * Optional. Currently used webhook IP address
   */
  ip_address?: string | undefined;
  /**
   * Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook
   */
  last_error_date?: number | undefined;
  /**
   * Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook
   */
  last_error_message?: string | undefined;
  /**
   * Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters
   */
  last_synchronization_error_date?: number | undefined;
  /**
   * Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
   */
  max_connections?: number | undefined;
  /**
   * Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat_member
   */
  allowed_updates?: Exclude<keyof TgUpdate, "update_id">[] | undefined;
};
/**
 * This object represents a Telegram user or bot.
 *
 * @see https://core.telegram.org/bots/api#user
 */
export type TgUser = {
  /**
   * Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  id: number;
  /**
   * True, if this user is a bot
   */
  is_bot: boolean;
  /**
   * User's or bot's first name
   */
  first_name: string;
  /**
   * Optional. User's or bot's last name
   */
  last_name?: string | undefined;
  /**
   * Optional. User's or bot's username
   */
  username?: string | undefined;
  /**
   * Optional. IETF language tag of the user's language
   */
  language_code?: string | undefined;
  /**
   * Optional. True, if this user is a Telegram Premium user
   */
  is_premium?: boolean | undefined;
  /**
   * Optional. True, if this user added the bot to the attachment menu
   */
  added_to_attachment_menu?: boolean | undefined;
  /**
   * Optional. True, if the bot can be invited to groups. Returned only in getMe.
   */
  can_join_groups?: boolean | undefined;
  /**
   * Optional. True, if privacy mode is disabled for the bot. Returned only in getMe.
   */
  can_read_all_group_messages?: boolean | undefined;
  /**
   * Optional. True, if the bot supports inline queries. Returned only in getMe.
   */
  supports_inline_queries?: boolean | undefined;
  /**
   * Optional. True, if the bot can be connected to a Telegram Business account to receive its messages. Returned only in getMe.
   */
  can_connect_to_business?: boolean | undefined;
  /**
   * Optional. True, if the bot has a main Web App. Returned only in getMe.
   */
  has_main_web_app?: boolean | undefined;
};
/**
 * This object represents a chat.
 *
 * @see https://core.telegram.org/bots/api#chat
 */
export type TgChat = {
  /**
   * Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  id: number;
  /**
   * Type of the chat, can be either "private", "group", "supergroup" or "channel"
   */
  type: "private" | "group" | "supergroup" | "channel";
  /**
   * Optional. Title, for supergroups, channels and group chats
   */
  title?: string | undefined;
  /**
   * Optional. Username, for private chats, supergroups and channels if available
   */
  username?: string | undefined;
  /**
   * Optional. First name of the other party in a private chat
   */
  first_name?: string | undefined;
  /**
   * Optional. Last name of the other party in a private chat
   */
  last_name?: string | undefined;
  /**
   * Optional. True, if the supergroup chat is a forum (has topics enabled)
   */
  is_forum?: boolean | undefined;
};
/**
 * This object contains full information about a chat.
 *
 * @see https://core.telegram.org/bots/api#chatfullinfo
 */
export type TgChatFullInfo = {
  /**
   * Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  id: number;
  /**
   * Type of the chat, can be either "private", "group", "supergroup" or "channel"
   */
  type: "private" | "group" | "supergroup" | "channel";
  /**
   * Optional. Title, for supergroups, channels and group chats
   */
  title?: string | undefined;
  /**
   * Optional. Username, for private chats, supergroups and channels if available
   */
  username?: string | undefined;
  /**
   * Optional. First name of the other party in a private chat
   */
  first_name?: string | undefined;
  /**
   * Optional. Last name of the other party in a private chat
   */
  last_name?: string | undefined;
  /**
   * Optional. True, if the supergroup chat is a forum (has topics enabled)
   */
  is_forum?: boolean | undefined;
  /**
   * Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview. See accent colors for more details.
   */
  accent_color_id: number;
  /**
   * The maximum number of reactions that can be set on a message in the chat
   */
  max_reaction_count: number;
  /**
   * Optional. Chat photo
   */
  photo?: TgChatPhoto | undefined;
  /**
   * Optional. If non-empty, the list of all active chat usernames; for private chats, supergroups and channels
   */
  active_usernames?: string[] | undefined;
  /**
   * Optional. For private chats, the date of birth of the user
   */
  birthdate?: TgBirthdate | undefined;
  /**
   * Optional. For private chats with business accounts, the intro of the business
   */
  business_intro?: TgBusinessIntro | undefined;
  /**
   * Optional. For private chats with business accounts, the location of the business
   */
  business_location?: TgBusinessLocation | undefined;
  /**
   * Optional. For private chats with business accounts, the opening hours of the business
   */
  business_opening_hours?: TgBusinessOpeningHours | undefined;
  /**
   * Optional. For private chats, the personal channel of the user
   */
  personal_chat?: TgChat | undefined;
  /**
   * Optional. List of available reactions allowed in the chat. If omitted, then all emoji reactions are allowed.
   */
  available_reactions?: TgReactionType[] | undefined;
  /**
   * Optional. Custom emoji identifier of the emoji chosen by the chat for the reply header and link preview background
   */
  background_custom_emoji_id?: string | undefined;
  /**
   * Optional. Identifier of the accent color for the chat's profile background. See profile accent colors for more details.
   */
  profile_accent_color_id?: number | undefined;
  /**
   * Optional. Custom emoji identifier of the emoji chosen by the chat for its profile background
   */
  profile_background_custom_emoji_id?: string | undefined;
  /**
   * Optional. Custom emoji identifier of the emoji status of the chat or the other party in a private chat
   */
  emoji_status_custom_emoji_id?: string | undefined;
  /**
   * Optional. Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any
   */
  emoji_status_expiration_date?: number | undefined;
  /**
   * Optional. Bio of the other party in a private chat
   */
  bio?: string | undefined;
  /**
   * Optional. True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user
   */
  has_private_forwards?: boolean | undefined;
  /**
   * Optional. True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat
   */
  has_restricted_voice_and_video_messages?: boolean | undefined;
  /**
   * Optional. True, if users need to join the supergroup before they can send messages
   */
  join_to_send_messages?: boolean | undefined;
  /**
   * Optional. True, if all users directly joining the supergroup without using an invite link need to be approved by supergroup administrators
   */
  join_by_request?: boolean | undefined;
  /**
   * Optional. Description, for groups, supergroups and channel chats
   */
  description?: string | undefined;
  /**
   * Optional. Primary invite link, for groups, supergroups and channel chats
   */
  invite_link?: string | undefined;
  /**
   * Optional. The most recent pinned message (by sending date)
   */
  pinned_message?: TgMessage | undefined;
  /**
   * Optional. Default chat member permissions, for groups and supergroups
   */
  permissions?: TgChatPermissions | undefined;
  /**
   * Information about types of gifts that are accepted by the chat or by the corresponding user for private chats
   */
  accepted_gift_types: TgAcceptedGiftTypes;
  /**
   * Optional. True, if paid media messages can be sent or forwarded to the channel chat. The field is available only for channel chats.
   */
  can_send_paid_media?: boolean | undefined;
  /**
   * Optional. For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds
   */
  slow_mode_delay?: number | undefined;
  /**
   * Optional. For supergroups, the minimum number of boosts that a non-administrator user needs to add in order to ignore slow mode and chat permissions
   */
  unrestrict_boost_count?: number | undefined;
  /**
   * Optional. The time after which all messages sent to the chat will be automatically deleted; in seconds
   */
  message_auto_delete_time?: number | undefined;
  /**
   * Optional. True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators.
   */
  has_aggressive_anti_spam_enabled?: boolean | undefined;
  /**
   * Optional. True, if non-administrators can only get the list of bots and administrators in the chat
   */
  has_hidden_members?: boolean | undefined;
  /**
   * Optional. True, if messages from the chat can't be forwarded to other chats
   */
  has_protected_content?: boolean | undefined;
  /**
   * Optional. True, if new chat members will have access to old messages; available only to chat administrators
   */
  has_visible_history?: boolean | undefined;
  /**
   * Optional. For supergroups, name of the group sticker set
   */
  sticker_set_name?: string | undefined;
  /**
   * Optional. True, if the bot can change the group sticker set
   */
  can_set_sticker_set?: boolean | undefined;
  /**
   * Optional. For supergroups, the name of the group's custom emoji sticker set. Custom emoji from this set can be used by all users and bots in the group.
   */
  custom_emoji_sticker_set_name?: string | undefined;
  /**
   * Optional. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
   */
  linked_chat_id?: number | undefined;
  /**
   * Optional. For supergroups, the location to which the supergroup is connected
   */
  location?: TgChatLocation | undefined;
};
/**
 * This object represents a message.
 *
 * @see https://core.telegram.org/bots/api#message
 */
export type TgMessage = {
  /**
   * Unique message identifier inside this chat. In specific instances (e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent
   */
  message_id: number;
  /**
   * Optional. Unique identifier of a message thread to which the message belongs; for supergroups only
   */
  message_thread_id?: number | undefined;
  /**
   * Optional. Sender of the message; may be empty for messages sent to channels. For backward compatibility, if the message was sent on behalf of a chat, the field contains a fake sender user in non-channel chats
   */
  from?: TgUser | undefined;
  /**
   * Optional. Sender of the message when sent on behalf of a chat. For example, the supergroup itself for messages sent by its anonymous administrators or a linked channel for messages automatically forwarded to the channel's discussion group. For backward compatibility, if the message was sent on behalf of a chat, the field from contains a fake sender user in non-channel chats.
   */
  sender_chat?: TgChat | undefined;
  /**
   * Optional. If the sender of the message boosted the chat, the number of boosts added by the user
   */
  sender_boost_count?: number | undefined;
  /**
   * Optional. The bot that actually sent the message on behalf of the business account. Available only for outgoing messages sent on behalf of the connected business account.
   */
  sender_business_bot?: TgUser | undefined;
  /**
   * Date the message was sent in Unix time. It is always a positive number, representing a valid date.
   */
  date: number;
  /**
   * Optional. Unique identifier of the business connection from which the message was received. If non-empty, the message belongs to a chat of the corresponding business account that is independent from any potential bot chat which might share the same identifier.
   */
  business_connection_id?: string | undefined;
  /**
   * Chat the message belongs to
   */
  chat: TgChat;
  /**
   * Optional. Information about the original message for forwarded messages
   */
  forward_origin?: TgMessageOrigin | undefined;
  /**
   * Optional. True, if the message is sent to a forum topic
   */
  is_topic_message?: boolean | undefined;
  /**
   * Optional. True, if the message is a channel post that was automatically forwarded to the connected discussion group
   */
  is_automatic_forward?: boolean | undefined;
  /**
   * Optional. For replies in the same chat and message thread, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.
   */
  reply_to_message?: TgMessage | undefined;
  /**
   * Optional. Information about the message that is being replied to, which may come from another chat or forum topic
   */
  external_reply?: TgExternalReplyInfo | undefined;
  /**
   * Optional. For replies that quote part of the original message, the quoted part of the message
   */
  quote?: TgTextQuote | undefined;
  /**
   * Optional. For replies to a story, the original story
   */
  reply_to_story?: TgStory | undefined;
  /**
   * Optional. Bot through which the message was sent
   */
  via_bot?: TgUser | undefined;
  /**
   * Optional. Date the message was last edited in Unix time
   */
  edit_date?: number | undefined;
  /**
   * Optional. True, if the message can't be forwarded
   */
  has_protected_content?: boolean | undefined;
  /**
   * Optional. True, if the message was sent by an implicit action, for example, as an away or a greeting business message, or as a scheduled message
   */
  is_from_offline?: boolean | undefined;
  /**
   * Optional. The unique identifier of a media message group this message belongs to
   */
  media_group_id?: string | undefined;
  /**
   * Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator
   */
  author_signature?: string | undefined;
  /**
   * Optional. The number of Telegram Stars that were paid by the sender of the message to send it
   */
  paid_star_count?: number | undefined;
  /**
   * Optional. For text messages, the actual UTF-8 text of the message
   */
  text?: string | undefined;
  /**
   * Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
   */
  entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Options used for link preview generation for the message, if it is a text message and link preview options were changed
   */
  link_preview_options?: TgLinkPreviewOptions | undefined;
  /**
   * Optional. Unique identifier of the message effect added to the message
   */
  effect_id?: string | undefined;
  /**
   * Optional. Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set
   */
  animation?: TgAnimation | undefined;
  /**
   * Optional. Message is an audio file, information about the file
   */
  audio?: TgAudio | undefined;
  /**
   * Optional. Message is a general file, information about the file
   */
  document?: TgDocument | undefined;
  /**
   * Optional. Message contains paid media; information about the paid media
   */
  paid_media?: TgPaidMediaInfo | undefined;
  /**
   * Optional. Message is a photo, available sizes of the photo
   */
  photo?: TgPhotoSize[] | undefined;
  /**
   * Optional. Message is a sticker, information about the sticker
   */
  sticker?: TgSticker | undefined;
  /**
   * Optional. Message is a forwarded story
   */
  story?: TgStory | undefined;
  /**
   * Optional. Message is a video, information about the video
   */
  video?: TgVideo | undefined;
  /**
   * Optional. Message is a video note, information about the video message
   */
  video_note?: TgVideoNote | undefined;
  /**
   * Optional. Message is a voice message, information about the file
   */
  voice?: TgVoice | undefined;
  /**
   * Optional. Caption for the animation, audio, document, paid media, photo, video or voice
   */
  caption?: string | undefined;
  /**
   * Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean | undefined;
  /**
   * Optional. True, if the message media is covered by a spoiler animation
   */
  has_media_spoiler?: boolean | undefined;
  /**
   * Optional. Message is a shared contact, information about the contact
   */
  contact?: TgContact | undefined;
  /**
   * Optional. Message is a dice with random value
   */
  dice?: TgDice | undefined;
  /**
   * Optional. Message is a game, information about the game. More about games: https://core.telegram.org/bots/api#games
   */
  game?: TgGame | undefined;
  /**
   * Optional. Message is a native poll, information about the poll
   */
  poll?: TgPoll | undefined;
  /**
   * Optional. Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set
   */
  venue?: TgVenue | undefined;
  /**
   * Optional. Message is a shared location, information about the location
   */
  location?: TgLocation | undefined;
  /**
   * Optional. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)
   */
  new_chat_members?: TgUser[] | undefined;
  /**
   * Optional. A member was removed from the group, information about them (this member may be the bot itself)
   */
  left_chat_member?: TgUser | undefined;
  /**
   * Optional. A chat title was changed to this value
   */
  new_chat_title?: string | undefined;
  /**
   * Optional. A chat photo was change to this value
   */
  new_chat_photo?: TgPhotoSize[] | undefined;
  /**
   * Optional. Service message: the chat photo was deleted
   */
  delete_chat_photo?: boolean | undefined;
  /**
   * Optional. Service message: the group has been created
   */
  group_chat_created?: boolean | undefined;
  /**
   * Optional. Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.
   */
  supergroup_chat_created?: boolean | undefined;
  /**
   * Optional. Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel.
   */
  channel_chat_created?: boolean | undefined;
  /**
   * Optional. Service message: auto-delete timer settings changed in the chat
   */
  message_auto_delete_timer_changed?: TgMessageAutoDeleteTimerChanged | undefined;
  /**
   * Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  migrate_to_chat_id?: number | undefined;
  /**
   * Optional. The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  migrate_from_chat_id?: number | undefined;
  /**
   * Optional. Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.
   */
  pinned_message?: TgMaybeInaccessibleMessage | undefined;
  /**
   * Optional. Message is an invoice for a payment, information about the invoice. More about payments: https://core.telegram.org/bots/api#payments
   */
  invoice?: TgInvoice | undefined;
  /**
   * Optional. Message is a service message about a successful payment, information about the payment. More about payments: https://core.telegram.org/bots/api#payments
   */
  successful_payment?: TgSuccessfulPayment | undefined;
  /**
   * Optional. Message is a service message about a refunded payment, information about the payment. More about payments: https://core.telegram.org/bots/api#payments
   */
  refunded_payment?: TgRefundedPayment | undefined;
  /**
   * Optional. Service message: users were shared with the bot
   */
  users_shared?: TgUsersShared | undefined;
  /**
   * Optional. Service message: a chat was shared with the bot
   */
  chat_shared?: TgChatShared | undefined;
  /**
   * Optional. Service message: a regular gift was sent or received
   */
  gift?: TgGiftInfo | undefined;
  /**
   * Optional. Service message: a unique gift was sent or received
   */
  unique_gift?: TgUniqueGiftInfo | undefined;
  /**
   * Optional. The domain name of the website on which the user has logged in. More about Telegram Login: https://core.telegram.org/widgets/login
   */
  connected_website?: string | undefined;
  /**
   * Optional. Service message: the user allowed the bot to write messages after adding it to the attachment or side menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess
   */
  write_access_allowed?: TgWriteAccessAllowed | undefined;
  /**
   * Optional. Telegram Passport data
   */
  passport_data?: TgPassportData | undefined;
  /**
   * Optional. Service message. A user in the chat triggered another user's proximity alert while sharing Live Location.
   */
  proximity_alert_triggered?: TgProximityAlertTriggered | undefined;
  /**
   * Optional. Service message: user boosted the chat
   */
  boost_added?: TgChatBoostAdded | undefined;
  /**
   * Optional. Service message: chat background set
   */
  chat_background_set?: TgChatBackground | undefined;
  /**
   * Optional. Service message: forum topic created
   */
  forum_topic_created?: TgForumTopicCreated | undefined;
  /**
   * Optional. Service message: forum topic edited
   */
  forum_topic_edited?: TgForumTopicEdited | undefined;
  /**
   * Optional. Service message: forum topic closed
   */
  forum_topic_closed?: TgForumTopicClosed | undefined;
  /**
   * Optional. Service message: forum topic reopened
   */
  forum_topic_reopened?: TgForumTopicReopened | undefined;
  /**
   * Optional. Service message: the 'General' forum topic hidden
   */
  general_forum_topic_hidden?: TgGeneralForumTopicHidden | undefined;
  /**
   * Optional. Service message: the 'General' forum topic unhidden
   */
  general_forum_topic_unhidden?: TgGeneralForumTopicUnhidden | undefined;
  /**
   * Optional. Service message: a scheduled giveaway was created
   */
  giveaway_created?: TgGiveawayCreated | undefined;
  /**
   * Optional. The message is a scheduled giveaway message
   */
  giveaway?: TgGiveaway | undefined;
  /**
   * Optional. A giveaway with public winners was completed
   */
  giveaway_winners?: TgGiveawayWinners | undefined;
  /**
   * Optional. Service message: a giveaway without public winners was completed
   */
  giveaway_completed?: TgGiveawayCompleted | undefined;
  /**
   * Optional. Service message: the price for paid messages has changed in the chat
   */
  paid_message_price_changed?: TgPaidMessagePriceChanged | undefined;
  /**
   * Optional. Service message: video chat scheduled
   */
  video_chat_scheduled?: TgVideoChatScheduled | undefined;
  /**
   * Optional. Service message: video chat started
   */
  video_chat_started?: TgVideoChatStarted | undefined;
  /**
   * Optional. Service message: video chat ended
   */
  video_chat_ended?: TgVideoChatEnded | undefined;
  /**
   * Optional. Service message: new participants invited to a video chat
   */
  video_chat_participants_invited?: TgVideoChatParticipantsInvited | undefined;
  /**
   * Optional. Service message: data sent by a Web App
   */
  web_app_data?: TgWebAppData | undefined;
  /**
   * Optional. Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons.
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
};
/**
 * This object represents a unique message identifier.
 *
 * @see https://core.telegram.org/bots/api#messageid
 */
export type TgMessageId = {
  /**
   * Unique message identifier. In specific instances (e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent
   */
  message_id: number;
};
/**
 * This object describes a message that was deleted or is otherwise inaccessible to the bot.
 *
 * @see https://core.telegram.org/bots/api#inaccessiblemessage
 */
export type TgInaccessibleMessage = {
  /**
   * Chat the message belonged to
   */
  chat: TgChat;
  /**
   * Unique message identifier inside the chat
   */
  message_id: number;
  /**
   * Always 0. The field can be used to differentiate regular and inaccessible messages.
   */
  date: number;
};
/**
 * This object describes a message that can be inaccessible to the bot. It can be one of
 *
 * - Message
 *
 * - InaccessibleMessage
 *
 * @see https://core.telegram.org/bots/api#maybeinaccessiblemessage
 */
export type TgMaybeInaccessibleMessage = TgMessage | TgInaccessibleMessage;
/**
 * This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
 *
 * @see https://core.telegram.org/bots/api#messageentity
 */
export type TgMessageEntity = {
  /**
   * Type of the entity. Currently, can be "mention" (@username), "hashtag" (#hashtag or #hashtag@chatusername), "cashtag" ($USD or $USD@chatusername), "bot_command" (/start@jobs_bot), "url" (https://telegram.org), "email" (do-not-reply@telegram.org), "phone_number" (+1-212-555-0123), "bold" (bold text), "italic" (italic text), "underline" (underlined text), "strikethrough" (strikethrough text), "spoiler" (spoiler message), "blockquote" (block quotation), "expandable_blockquote" (collapsed-by-default block quotation), "code" (monowidth string), "pre" (monowidth block), "text_link" (for clickable text URLs), "text_mention" (for users without usernames), "custom_emoji" (for inline custom emoji stickers)
   */
  type:
    | "mention"
    | "hashtag"
    | "cashtag"
    | "bot_command"
    | "url"
    | "email"
    | "phone_number"
    | "bold"
    | "italic"
    | "underline"
    | "strikethrough"
    | "spoiler"
    | "blockquote"
    | "expandable_blockquote"
    | "code"
    | "pre"
    | "text_link"
    | "text_mention"
    | "custom_emoji";
  /**
   * Offset in UTF-16 code units to the start of the entity
   */
  offset: number;
  /**
   * Length of the entity in UTF-16 code units
   */
  length: number;
  /**
   * Optional. For "text_link" only, URL that will be opened after user taps on the text
   */
  url?: string | undefined;
  /**
   * Optional. For "text_mention" only, the mentioned user
   */
  user?: TgUser | undefined;
  /**
   * Optional. For "pre" only, the programming language of the entity text
   */
  language?: string | undefined;
  /**
   * Optional. For "custom_emoji" only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker
   */
  custom_emoji_id?: string | undefined;
};
/**
 * This object contains information about the quoted part of a message that is replied to by the given message.
 *
 * @see https://core.telegram.org/bots/api#textquote
 */
export type TgTextQuote = {
  /**
   * Text of the quoted part of a message that is replied to by the given message
   */
  text: string;
  /**
   * Optional. Special entities that appear in the quote. Currently, only bold, italic, underline, strikethrough, spoiler, and custom_emoji entities are kept in quotes.
   */
  entities?: TgMessageEntity[] | undefined;
  /**
   * Approximate quote position in the original message in UTF-16 code units as specified by the sender
   */
  position: number;
  /**
   * Optional. True, if the quote was chosen manually by the message sender. Otherwise, the quote was added automatically by the server.
   */
  is_manual?: boolean | undefined;
};
/**
 * This object contains information about a message that is being replied to, which may come from another chat or forum topic.
 *
 * @see https://core.telegram.org/bots/api#externalreplyinfo
 */
export type TgExternalReplyInfo = {
  /**
   * Origin of the message replied to by the given message
   */
  origin: TgMessageOrigin;
  /**
   * Optional. Chat the original message belongs to. Available only if the chat is a supergroup or a channel.
   */
  chat?: TgChat | undefined;
  /**
   * Optional. Unique message identifier inside the original chat. Available only if the original chat is a supergroup or a channel.
   */
  message_id?: number | undefined;
  /**
   * Optional. Options used for link preview generation for the original message, if it is a text message
   */
  link_preview_options?: TgLinkPreviewOptions | undefined;
  /**
   * Optional. Message is an animation, information about the animation
   */
  animation?: TgAnimation | undefined;
  /**
   * Optional. Message is an audio file, information about the file
   */
  audio?: TgAudio | undefined;
  /**
   * Optional. Message is a general file, information about the file
   */
  document?: TgDocument | undefined;
  /**
   * Optional. Message contains paid media; information about the paid media
   */
  paid_media?: TgPaidMediaInfo | undefined;
  /**
   * Optional. Message is a photo, available sizes of the photo
   */
  photo?: TgPhotoSize[] | undefined;
  /**
   * Optional. Message is a sticker, information about the sticker
   */
  sticker?: TgSticker | undefined;
  /**
   * Optional. Message is a forwarded story
   */
  story?: TgStory | undefined;
  /**
   * Optional. Message is a video, information about the video
   */
  video?: TgVideo | undefined;
  /**
   * Optional. Message is a video note, information about the video message
   */
  video_note?: TgVideoNote | undefined;
  /**
   * Optional. Message is a voice message, information about the file
   */
  voice?: TgVoice | undefined;
  /**
   * Optional. True, if the message media is covered by a spoiler animation
   */
  has_media_spoiler?: boolean | undefined;
  /**
   * Optional. Message is a shared contact, information about the contact
   */
  contact?: TgContact | undefined;
  /**
   * Optional. Message is a dice with random value
   */
  dice?: TgDice | undefined;
  /**
   * Optional. Message is a game, information about the game. More about games: https://core.telegram.org/bots/api#games
   */
  game?: TgGame | undefined;
  /**
   * Optional. Message is a scheduled giveaway, information about the giveaway
   */
  giveaway?: TgGiveaway | undefined;
  /**
   * Optional. A giveaway with public winners was completed
   */
  giveaway_winners?: TgGiveawayWinners | undefined;
  /**
   * Optional. Message is an invoice for a payment, information about the invoice. More about payments: https://core.telegram.org/bots/api#payments
   */
  invoice?: TgInvoice | undefined;
  /**
   * Optional. Message is a shared location, information about the location
   */
  location?: TgLocation | undefined;
  /**
   * Optional. Message is a native poll, information about the poll
   */
  poll?: TgPoll | undefined;
  /**
   * Optional. Message is a venue, information about the venue
   */
  venue?: TgVenue | undefined;
};
/**
 * Describes reply parameters for the message that is being sent.
 *
 * @see https://core.telegram.org/bots/api#replyparameters
 */
export type TgReplyParameters = {
  /**
   * Identifier of the message that will be replied to in the current chat, or in the chat chat_id if it is specified
   */
  message_id: number;
  /**
   * Optional. If the message to be replied to is from a different chat, unique identifier for the chat or username of the channel (in the format @channelusername). Not supported for messages sent on behalf of a business account.
   */
  chat_id?: number | string | undefined;
  /**
   * Optional. Pass True if the message should be sent even if the specified message to be replied to is not found. Always False for replies in another chat or forum topic. Always True for messages sent on behalf of a business account.
   */
  allow_sending_without_reply?: boolean | undefined;
  /**
   * Optional. Quoted part of the message to be replied to; 0-1024 characters after entities parsing. The quote must be an exact substring of the message to be replied to, including bold, italic, underline, strikethrough, spoiler, and custom_emoji entities. The message will fail to send if the quote isn't found in the original message.
   */
  quote?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the quote. See formatting options for more details.
   */
  quote_parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. A JSON-serialized list of special entities that appear in the quote. It can be specified instead of quote_parse_mode.
   */
  quote_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Position of the quote in the original message in UTF-16 code units
   */
  quote_position?: number | undefined;
};
/**
 * This object describes the origin of a message. It can be one of
 *
 * - MessageOriginUser
 *
 * - MessageOriginHiddenUser
 *
 * - MessageOriginChat
 *
 * - MessageOriginChannel
 *
 * @see https://core.telegram.org/bots/api#messageorigin
 */
export type TgMessageOrigin =
  | TgMessageOriginUser
  | TgMessageOriginHiddenUser
  | TgMessageOriginChat
  | TgMessageOriginChannel;
/**
 * The message was originally sent by a known user.
 *
 * @see https://core.telegram.org/bots/api#messageoriginuser
 */
export type TgMessageOriginUser = {
  /**
   * Type of the message origin, always "user"
   */
  type: "user";
  /**
   * Date the message was sent originally in Unix time
   */
  date: number;
  /**
   * User that sent the message originally
   */
  sender_user: TgUser;
};
/**
 * The message was originally sent by an unknown user.
 *
 * @see https://core.telegram.org/bots/api#messageoriginhiddenuser
 */
export type TgMessageOriginHiddenUser = {
  /**
   * Type of the message origin, always "hidden_user"
   */
  type: "hidden_user";
  /**
   * Date the message was sent originally in Unix time
   */
  date: number;
  /**
   * Name of the user that sent the message originally
   */
  sender_user_name: string;
};
/**
 * The message was originally sent on behalf of a chat to a group chat.
 *
 * @see https://core.telegram.org/bots/api#messageoriginchat
 */
export type TgMessageOriginChat = {
  /**
   * Type of the message origin, always "chat"
   */
  type: "chat";
  /**
   * Date the message was sent originally in Unix time
   */
  date: number;
  /**
   * Chat that sent the message originally
   */
  sender_chat: TgChat;
  /**
   * Optional. For messages originally sent by an anonymous chat administrator, original message author signature
   */
  author_signature?: string | undefined;
};
/**
 * The message was originally sent to a channel chat.
 *
 * @see https://core.telegram.org/bots/api#messageoriginchannel
 */
export type TgMessageOriginChannel = {
  /**
   * Type of the message origin, always "channel"
   */
  type: "channel";
  /**
   * Date the message was sent originally in Unix time
   */
  date: number;
  /**
   * Channel chat to which the message was originally sent
   */
  chat: TgChat;
  /**
   * Unique message identifier inside the chat
   */
  message_id: number;
  /**
   * Optional. Signature of the original post author
   */
  author_signature?: string | undefined;
};
/**
 * This object represents one size of a photo or a file / sticker thumbnail.
 *
 * @see https://core.telegram.org/bots/api#photosize
 */
export type TgPhotoSize = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;
  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;
  /**
   * Photo width
   */
  width: number;
  /**
   * Photo height
   */
  height: number;
  /**
   * Optional. File size in bytes
   */
  file_size?: number | undefined;
};
/**
 * This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).
 *
 * @see https://core.telegram.org/bots/api#animation
 */
export type TgAnimation = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;
  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;
  /**
   * Video width as defined by the sender
   */
  width: number;
  /**
   * Video height as defined by the sender
   */
  height: number;
  /**
   * Duration of the video in seconds as defined by the sender
   */
  duration: number;
  /**
   * Optional. Animation thumbnail as defined by the sender
   */
  thumbnail?: TgPhotoSize | undefined;
  /**
   * Optional. Original animation filename as defined by the sender
   */
  file_name?: string | undefined;
  /**
   * Optional. MIME type of the file as defined by the sender
   */
  mime_type?: string | undefined;
  /**
   * Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   */
  file_size?: number | undefined;
};
/**
 * This object represents an audio file to be treated as music by the Telegram clients.
 *
 * @see https://core.telegram.org/bots/api#audio
 */
export type TgAudio = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;
  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;
  /**
   * Duration of the audio in seconds as defined by the sender
   */
  duration: number;
  /**
   * Optional. Performer of the audio as defined by the sender or by audio tags
   */
  performer?: string | undefined;
  /**
   * Optional. Title of the audio as defined by the sender or by audio tags
   */
  title?: string | undefined;
  /**
   * Optional. Original filename as defined by the sender
   */
  file_name?: string | undefined;
  /**
   * Optional. MIME type of the file as defined by the sender
   */
  mime_type?: string | undefined;
  /**
   * Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   */
  file_size?: number | undefined;
  /**
   * Optional. Thumbnail of the album cover to which the music file belongs
   */
  thumbnail?: TgPhotoSize | undefined;
};
/**
 * This object represents a general file (as opposed to photos, voice messages and audio files).
 *
 * @see https://core.telegram.org/bots/api#document
 */
export type TgDocument = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;
  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;
  /**
   * Optional. Document thumbnail as defined by the sender
   */
  thumbnail?: TgPhotoSize | undefined;
  /**
   * Optional. Original filename as defined by the sender
   */
  file_name?: string | undefined;
  /**
   * Optional. MIME type of the file as defined by the sender
   */
  mime_type?: string | undefined;
  /**
   * Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   */
  file_size?: number | undefined;
};
/**
 * This object represents a story.
 *
 * @see https://core.telegram.org/bots/api#story
 */
export type TgStory = {
  /**
   * Chat that posted the story
   */
  chat: TgChat;
  /**
   * Unique identifier for the story in the chat
   */
  id: number;
};
/**
 * This object represents a video file.
 *
 * @see https://core.telegram.org/bots/api#video
 */
export type TgVideo = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;
  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;
  /**
   * Video width as defined by the sender
   */
  width: number;
  /**
   * Video height as defined by the sender
   */
  height: number;
  /**
   * Duration of the video in seconds as defined by the sender
   */
  duration: number;
  /**
   * Optional. Video thumbnail
   */
  thumbnail?: TgPhotoSize | undefined;
  /**
   * Optional. Available sizes of the cover of the video in the message
   */
  cover?: TgPhotoSize[] | undefined;
  /**
   * Optional. Timestamp in seconds from which the video will play in the message
   */
  start_timestamp?: number | undefined;
  /**
   * Optional. Original filename as defined by the sender
   */
  file_name?: string | undefined;
  /**
   * Optional. MIME type of the file as defined by the sender
   */
  mime_type?: string | undefined;
  /**
   * Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   */
  file_size?: number | undefined;
};
/**
 * This object represents a video message (available in Telegram apps as of v.4.0).
 *
 * @see https://core.telegram.org/bots/api#videonote
 */
export type TgVideoNote = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;
  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;
  /**
   * Video width and height (diameter of the video message) as defined by the sender
   */
  length: number;
  /**
   * Duration of the video in seconds as defined by the sender
   */
  duration: number;
  /**
   * Optional. Video thumbnail
   */
  thumbnail?: TgPhotoSize | undefined;
  /**
   * Optional. File size in bytes
   */
  file_size?: number | undefined;
};
/**
 * This object represents a voice note.
 *
 * @see https://core.telegram.org/bots/api#voice
 */
export type TgVoice = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;
  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;
  /**
   * Duration of the audio in seconds as defined by the sender
   */
  duration: number;
  /**
   * Optional. MIME type of the file as defined by the sender
   */
  mime_type?: string | undefined;
  /**
   * Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   */
  file_size?: number | undefined;
};
/**
 * Describes the paid media added to a message.
 *
 * @see https://core.telegram.org/bots/api#paidmediainfo
 */
export type TgPaidMediaInfo = {
  /**
   * The number of Telegram Stars that must be paid to buy access to the media
   */
  star_count: number;
  /**
   * Information about the paid media
   */
  paid_media: TgPaidMedia[];
};
/**
 * This object describes paid media. Currently, it can be one of
 *
 * - PaidMediaPreview
 *
 * - PaidMediaPhoto
 *
 * - PaidMediaVideo
 *
 * @see https://core.telegram.org/bots/api#paidmedia
 */
export type TgPaidMedia = TgPaidMediaPreview | TgPaidMediaPhoto | TgPaidMediaVideo;
/**
 * The paid media isn't available before the payment.
 *
 * @see https://core.telegram.org/bots/api#paidmediapreview
 */
export type TgPaidMediaPreview = {
  /**
   * Type of the paid media, always "preview"
   */
  type: "preview";
  /**
   * Optional. Media width as defined by the sender
   */
  width?: number | undefined;
  /**
   * Optional. Media height as defined by the sender
   */
  height?: number | undefined;
  /**
   * Optional. Duration of the media in seconds as defined by the sender
   */
  duration?: number | undefined;
};
/**
 * The paid media is a photo.
 *
 * @see https://core.telegram.org/bots/api#paidmediaphoto
 */
export type TgPaidMediaPhoto = {
  /**
   * Type of the paid media, always "photo"
   */
  type: "photo";
  /**
   * The photo
   */
  photo: TgPhotoSize[];
};
/**
 * The paid media is a video.
 *
 * @see https://core.telegram.org/bots/api#paidmediavideo
 */
export type TgPaidMediaVideo = {
  /**
   * Type of the paid media, always "video"
   */
  type: "video";
  /**
   * The video
   */
  video: TgVideo;
};
/**
 * This object represents a phone contact.
 *
 * @see https://core.telegram.org/bots/api#contact
 */
export type TgContact = {
  /**
   * Contact's phone number
   */
  phone_number: string;
  /**
   * Contact's first name
   */
  first_name: string;
  /**
   * Optional. Contact's last name
   */
  last_name?: string | undefined;
  /**
   * Optional. Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  user_id?: number | undefined;
  /**
   * Optional. Additional data about the contact in the form of a vCard
   */
  vcard?: string | undefined;
};
/**
 * This object represents an animated emoji that displays a random value.
 *
 * @see https://core.telegram.org/bots/api#dice
 */
export type TgDice = {
  /**
   * Emoji on which the dice throw animation is based
   */
  emoji: string;
  /**
   * Value of the dice, 1-6 for "🎲", "🎯" and "🎳" base emoji, 1-5 for "🏀" and "⚽" base emoji, 1-64 for "🎰" base emoji
   */
  value: number;
};
/**
 * This object contains information about one answer option in a poll.
 *
 * @see https://core.telegram.org/bots/api#polloption
 */
export type TgPollOption = {
  /**
   * Option text, 1-100 characters
   */
  text: string;
  /**
   * Optional. Special entities that appear in the option text. Currently, only custom emoji entities are allowed in poll option texts
   */
  text_entities?: TgMessageEntity[] | undefined;
  /**
   * Number of users that voted for this option
   */
  voter_count: number;
};
/**
 * This object contains information about one answer option in a poll to be sent.
 *
 * @see https://core.telegram.org/bots/api#inputpolloption
 */
export type TgInputPollOption = {
  /**
   * Option text, 1-100 characters
   */
  text: string;
  /**
   * Optional. Mode for parsing entities in the text. See formatting options for more details. Currently, only custom emoji entities are allowed
   */
  text_parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. A JSON-serialized list of special entities that appear in the poll option text. It can be specified instead of text_parse_mode
   */
  text_entities?: TgMessageEntity[] | undefined;
};
/**
 * This object represents an answer of a user in a non-anonymous poll.
 *
 * @see https://core.telegram.org/bots/api#pollanswer
 */
export type TgPollAnswer = {
  /**
   * Unique poll identifier
   */
  poll_id: string;
  /**
   * Optional. The chat that changed the answer to the poll, if the voter is anonymous
   */
  voter_chat?: TgChat | undefined;
  /**
   * Optional. The user that changed the answer to the poll, if the voter isn't anonymous
   */
  user?: TgUser | undefined;
  /**
   * 0-based identifiers of chosen answer options. May be empty if the vote was retracted.
   */
  option_ids: number[];
};
/**
 * This object contains information about a poll.
 *
 * @see https://core.telegram.org/bots/api#poll
 */
export type TgPoll = {
  /**
   * Unique poll identifier
   */
  id: string;
  /**
   * Poll question, 1-300 characters
   */
  question: string;
  /**
   * Optional. Special entities that appear in the question. Currently, only custom emoji entities are allowed in poll questions
   */
  question_entities?: TgMessageEntity[] | undefined;
  /**
   * List of poll options
   */
  options: TgPollOption[];
  /**
   * Total number of users that voted in the poll
   */
  total_voter_count: number;
  /**
   * True, if the poll is closed
   */
  is_closed: boolean;
  /**
   * True, if the poll is anonymous
   */
  is_anonymous: boolean;
  /**
   * Poll type, currently can be "regular" or "quiz"
   */
  type: "regular" | "quiz";
  /**
   * True, if the poll allows multiple answers
   */
  allows_multiple_answers: boolean;
  /**
   * Optional. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot.
   */
  correct_option_id?: number | undefined;
  /**
   * Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters
   */
  explanation?: string | undefined;
  /**
   * Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation
   */
  explanation_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Amount of time in seconds the poll will be active after creation
   */
  open_period?: number | undefined;
  /**
   * Optional. Point in time (Unix timestamp) when the poll will be automatically closed
   */
  close_date?: number | undefined;
};
/**
 * This object represents a point on the map.
 *
 * @see https://core.telegram.org/bots/api#location
 */
export type TgLocation = {
  /**
   * Latitude as defined by the sender
   */
  latitude: number;
  /**
   * Longitude as defined by the sender
   */
  longitude: number;
  /**
   * Optional. The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontal_accuracy?: number | undefined;
  /**
   * Optional. Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only.
   */
  live_period?: number | undefined;
  /**
   * Optional. The direction in which user is moving, in degrees; 1-360. For active live locations only.
   */
  heading?: number | undefined;
  /**
   * Optional. The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.
   */
  proximity_alert_radius?: number | undefined;
};
/**
 * This object represents a venue.
 *
 * @see https://core.telegram.org/bots/api#venue
 */
export type TgVenue = {
  /**
   * Venue location. Can't be a live location
   */
  location: TgLocation;
  /**
   * Name of the venue
   */
  title: string;
  /**
   * Address of the venue
   */
  address: string;
  /**
   * Optional. Foursquare identifier of the venue
   */
  foursquare_id?: string | undefined;
  /**
   * Optional. Foursquare type of the venue. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)
   */
  foursquare_type?: string | undefined;
  /**
   * Optional. Google Places identifier of the venue
   */
  google_place_id?: string | undefined;
  /**
   * Optional. Google Places type of the venue. (See supported types.)
   */
  google_place_type?: string | undefined;
};
/**
 * Describes data sent from a Web App to the bot.
 *
 * @see https://core.telegram.org/bots/api#webappdata
 */
export type TgWebAppData = {
  /**
   * The data. Be aware that a bad client can send arbitrary data in this field.
   */
  data: string;
  /**
   * Text of the web_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field.
   */
  button_text: string;
};
/**
 * This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
 *
 * @see https://core.telegram.org/bots/api#proximityalerttriggered
 */
export type TgProximityAlertTriggered = {
  /**
   * User that triggered the alert
   */
  traveler: TgUser;
  /**
   * User that set the alert
   */
  watcher: TgUser;
  /**
   * The distance between the users
   */
  distance: number;
};
/**
 * This object represents a service message about a change in auto-delete timer settings.
 *
 * @see https://core.telegram.org/bots/api#messageautodeletetimerchanged
 */
export type TgMessageAutoDeleteTimerChanged = {
  /**
   * New auto-delete time for messages in the chat; in seconds
   */
  message_auto_delete_time: number;
};
/**
 * This object represents a service message about a user boosting a chat.
 *
 * @see https://core.telegram.org/bots/api#chatboostadded
 */
export type TgChatBoostAdded = {
  /**
   * Number of boosts added by the user
   */
  boost_count: number;
};
/**
 * This object describes the way a background is filled based on the selected colors. Currently, it can be one of
 *
 * - BackgroundFillSolid
 *
 * - BackgroundFillGradient
 *
 * - BackgroundFillFreeformGradient
 *
 * @see https://core.telegram.org/bots/api#backgroundfill
 */
export type TgBackgroundFill =
  | TgBackgroundFillSolid
  | TgBackgroundFillGradient
  | TgBackgroundFillFreeformGradient;
/**
 * The background is filled using the selected color.
 *
 * @see https://core.telegram.org/bots/api#backgroundfillsolid
 */
export type TgBackgroundFillSolid = {
  /**
   * Type of the background fill, always "solid"
   */
  type: "solid";
  /**
   * The color of the background fill in the RGB24 format
   */
  color: number;
};
/**
 * The background is a gradient fill.
 *
 * @see https://core.telegram.org/bots/api#backgroundfillgradient
 */
export type TgBackgroundFillGradient = {
  /**
   * Type of the background fill, always "gradient"
   */
  type: "gradient";
  /**
   * Top color of the gradient in the RGB24 format
   */
  top_color: number;
  /**
   * Bottom color of the gradient in the RGB24 format
   */
  bottom_color: number;
  /**
   * Clockwise rotation angle of the background fill in degrees; 0-359
   */
  rotation_angle: number;
};
/**
 * The background is a freeform gradient that rotates after every message in the chat.
 *
 * @see https://core.telegram.org/bots/api#backgroundfillfreeformgradient
 */
export type TgBackgroundFillFreeformGradient = {
  /**
   * Type of the background fill, always "freeform_gradient"
   */
  type: "freeform_gradient";
  /**
   * A list of the 3 or 4 base colors that are used to generate the freeform gradient in the RGB24 format
   */
  colors: number[];
};
/**
 * This object describes the type of a background. Currently, it can be one of
 *
 * - BackgroundTypeFill
 *
 * - BackgroundTypeWallpaper
 *
 * - BackgroundTypePattern
 *
 * - BackgroundTypeChatTheme
 *
 * @see https://core.telegram.org/bots/api#backgroundtype
 */
export type TgBackgroundType =
  | TgBackgroundTypeFill
  | TgBackgroundTypeWallpaper
  | TgBackgroundTypePattern
  | TgBackgroundTypeChatTheme;
/**
 * The background is automatically filled based on the selected colors.
 *
 * @see https://core.telegram.org/bots/api#backgroundtypefill
 */
export type TgBackgroundTypeFill = {
  /**
   * Type of the background, always "fill"
   */
  type: "fill";
  /**
   * The background fill
   */
  fill: TgBackgroundFill;
  /**
   * Dimming of the background in dark themes, as a percentage; 0-100
   */
  dark_theme_dimming: number;
};
/**
 * The background is a wallpaper in the JPEG format.
 *
 * @see https://core.telegram.org/bots/api#backgroundtypewallpaper
 */
export type TgBackgroundTypeWallpaper = {
  /**
   * Type of the background, always "wallpaper"
   */
  type: "wallpaper";
  /**
   * Document with the wallpaper
   */
  document: TgDocument;
  /**
   * Dimming of the background in dark themes, as a percentage; 0-100
   */
  dark_theme_dimming: number;
  /**
   * Optional. True, if the wallpaper is downscaled to fit in a 450x450 square and then box-blurred with radius 12
   */
  is_blurred?: boolean | undefined;
  /**
   * Optional. True, if the background moves slightly when the device is tilted
   */
  is_moving?: boolean | undefined;
};
/**
 * The background is a .PNG or .TGV (gzipped subset of SVG with MIME type "application/x-tgwallpattern") pattern to be combined with the background fill chosen by the user.
 *
 * @see https://core.telegram.org/bots/api#backgroundtypepattern
 */
export type TgBackgroundTypePattern = {
  /**
   * Type of the background, always "pattern"
   */
  type: "pattern";
  /**
   * Document with the pattern
   */
  document: TgDocument;
  /**
   * The background fill that is combined with the pattern
   */
  fill: TgBackgroundFill;
  /**
   * Intensity of the pattern when it is shown above the filled background; 0-100
   */
  intensity: number;
  /**
   * Optional. True, if the background fill must be applied only to the pattern itself. All other pixels are black in this case. For dark themes only
   */
  is_inverted?: boolean | undefined;
  /**
   * Optional. True, if the background moves slightly when the device is tilted
   */
  is_moving?: boolean | undefined;
};
/**
 * The background is taken directly from a built-in chat theme.
 *
 * @see https://core.telegram.org/bots/api#backgroundtypechattheme
 */
export type TgBackgroundTypeChatTheme = {
  /**
   * Type of the background, always "chat_theme"
   */
  type: "chat_theme";
  /**
   * Name of the chat theme, which is usually an emoji
   */
  theme_name: string;
};
/**
 * This object represents a chat background.
 *
 * @see https://core.telegram.org/bots/api#chatbackground
 */
export type TgChatBackground = {
  /**
   * Type of the background
   */
  type: TgBackgroundType;
};
/**
 * This object represents a service message about a new forum topic created in the chat.
 *
 * @see https://core.telegram.org/bots/api#forumtopiccreated
 */
export type TgForumTopicCreated = {
  /**
   * Name of the topic
   */
  name: string;
  /**
   * Color of the topic icon in RGB format
   */
  icon_color: number;
  /**
   * Optional. Unique identifier of the custom emoji shown as the topic icon
   */
  icon_custom_emoji_id?: string | undefined;
};
/**
 * This object represents a service message about a forum topic closed in the chat. Currently holds no information.
 *
 * @see https://core.telegram.org/bots/api#forumtopicclosed
 */
export type TgForumTopicClosed = {};
/**
 * This object represents a service message about an edited forum topic.
 *
 * @see https://core.telegram.org/bots/api#forumtopicedited
 */
export type TgForumTopicEdited = {
  /**
   * Optional. New name of the topic, if it was edited
   */
  name?: string | undefined;
  /**
   * Optional. New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed
   */
  icon_custom_emoji_id?: string | undefined;
};
/**
 * This object represents a service message about a forum topic reopened in the chat. Currently holds no information.
 *
 * @see https://core.telegram.org/bots/api#forumtopicreopened
 */
export type TgForumTopicReopened = {};
/**
 * This object represents a service message about General forum topic hidden in the chat. Currently holds no information.
 *
 * @see https://core.telegram.org/bots/api#generalforumtopichidden
 */
export type TgGeneralForumTopicHidden = {};
/**
 * This object represents a service message about General forum topic unhidden in the chat. Currently holds no information.
 *
 * @see https://core.telegram.org/bots/api#generalforumtopicunhidden
 */
export type TgGeneralForumTopicUnhidden = {};
/**
 * This object contains information about a user that was shared with the bot using a KeyboardButtonRequestUsers button.
 *
 * @see https://core.telegram.org/bots/api#shareduser
 */
export type TgSharedUser = {
  /**
   * Identifier of the shared user. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so 64-bit integers or double-precision float types are safe for storing these identifiers. The bot may not have access to the user and could be unable to use this identifier, unless the user is already known to the bot by some other means.
   */
  user_id: number;
  /**
   * Optional. First name of the user, if the name was requested by the bot
   */
  first_name?: string | undefined;
  /**
   * Optional. Last name of the user, if the name was requested by the bot
   */
  last_name?: string | undefined;
  /**
   * Optional. Username of the user, if the username was requested by the bot
   */
  username?: string | undefined;
  /**
   * Optional. Available sizes of the chat photo, if the photo was requested by the bot
   */
  photo?: TgPhotoSize[] | undefined;
};
/**
 * This object contains information about the users whose identifiers were shared with the bot using a KeyboardButtonRequestUsers button.
 *
 * @see https://core.telegram.org/bots/api#usersshared
 */
export type TgUsersShared = {
  /**
   * Identifier of the request
   */
  request_id: number;
  /**
   * Information about users shared with the bot.
   */
  users: TgSharedUser[];
};
/**
 * This object contains information about a chat that was shared with the bot using a KeyboardButtonRequestChat button.
 *
 * @see https://core.telegram.org/bots/api#chatshared
 */
export type TgChatShared = {
  /**
   * Identifier of the request
   */
  request_id: number;
  /**
   * Identifier of the shared chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means.
   */
  chat_id: number;
  /**
   * Optional. Title of the chat, if the title was requested by the bot.
   */
  title?: string | undefined;
  /**
   * Optional. Username of the chat, if the username was requested by the bot and available.
   */
  username?: string | undefined;
  /**
   * Optional. Available sizes of the chat photo, if the photo was requested by the bot
   */
  photo?: TgPhotoSize[] | undefined;
};
/**
 * This object represents a service message about a user allowing a bot to write messages after adding it to the attachment menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess.
 *
 * @see https://core.telegram.org/bots/api#writeaccessallowed
 */
export type TgWriteAccessAllowed = {
  /**
   * Optional. True, if the access was granted after the user accepted an explicit request from a Web App sent by the method requestWriteAccess
   */
  from_request?: boolean | undefined;
  /**
   * Optional. Name of the Web App, if the access was granted when the Web App was launched from a link
   */
  web_app_name?: string | undefined;
  /**
   * Optional. True, if the access was granted when the bot was added to the attachment or side menu
   */
  from_attachment_menu?: boolean | undefined;
};
/**
 * This object represents a service message about a video chat scheduled in the chat.
 *
 * @see https://core.telegram.org/bots/api#videochatscheduled
 */
export type TgVideoChatScheduled = {
  /**
   * Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator
   */
  start_date: number;
};
/**
 * This object represents a service message about a video chat started in the chat. Currently holds no information.
 *
 * @see https://core.telegram.org/bots/api#videochatstarted
 */
export type TgVideoChatStarted = {};
/**
 * This object represents a service message about a video chat ended in the chat.
 *
 * @see https://core.telegram.org/bots/api#videochatended
 */
export type TgVideoChatEnded = {
  /**
   * Video chat duration in seconds
   */
  duration: number;
};
/**
 * This object represents a service message about new members invited to a video chat.
 *
 * @see https://core.telegram.org/bots/api#videochatparticipantsinvited
 */
export type TgVideoChatParticipantsInvited = {
  /**
   * New members that were invited to the video chat
   */
  users: TgUser[];
};
/**
 * Describes a service message about a change in the price of paid messages within a chat.
 *
 * @see https://core.telegram.org/bots/api#paidmessagepricechanged
 */
export type TgPaidMessagePriceChanged = {
  /**
   * The new number of Telegram Stars that must be paid by non-administrator users of the supergroup chat for each sent message
   */
  paid_message_star_count: number;
};
/**
 * This object represents a service message about the creation of a scheduled giveaway.
 *
 * @see https://core.telegram.org/bots/api#giveawaycreated
 */
export type TgGiveawayCreated = {
  /**
   * Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
   */
  prize_star_count?: number | undefined;
};
/**
 * This object represents a message about a scheduled giveaway.
 *
 * @see https://core.telegram.org/bots/api#giveaway
 */
export type TgGiveaway = {
  /**
   * The list of chats which the user must join to participate in the giveaway
   */
  chats: TgChat[];
  /**
   * Point in time (Unix timestamp) when winners of the giveaway will be selected
   */
  winners_selection_date: number;
  /**
   * The number of users which are supposed to be selected as winners of the giveaway
   */
  winner_count: number;
  /**
   * Optional. True, if only users who join the chats after the giveaway started should be eligible to win
   */
  only_new_members?: boolean | undefined;
  /**
   * Optional. True, if the list of giveaway winners will be visible to everyone
   */
  has_public_winners?: boolean | undefined;
  /**
   * Optional. Description of additional giveaway prize
   */
  prize_description?: string | undefined;
  /**
   * Optional. A list of two-letter ISO 3166-1 alpha-2 country codes indicating the countries from which eligible users for the giveaway must come. If empty, then all users can participate in the giveaway. Users with a phone number that was bought on Fragment can always participate in giveaways.
   */
  country_codes?: string[] | undefined;
  /**
   * Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
   */
  prize_star_count?: number | undefined;
  /**
   * Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only
   */
  premium_subscription_month_count?: number | undefined;
};
/**
 * This object represents a message about the completion of a giveaway with public winners.
 *
 * @see https://core.telegram.org/bots/api#giveawaywinners
 */
export type TgGiveawayWinners = {
  /**
   * The chat that created the giveaway
   */
  chat: TgChat;
  /**
   * Identifier of the message with the giveaway in the chat
   */
  giveaway_message_id: number;
  /**
   * Point in time (Unix timestamp) when winners of the giveaway were selected
   */
  winners_selection_date: number;
  /**
   * Total number of winners in the giveaway
   */
  winner_count: number;
  /**
   * List of up to 100 winners of the giveaway
   */
  winners: TgUser[];
  /**
   * Optional. The number of other chats the user had to join in order to be eligible for the giveaway
   */
  additional_chat_count?: number | undefined;
  /**
   * Optional. The number of Telegram Stars that were split between giveaway winners; for Telegram Star giveaways only
   */
  prize_star_count?: number | undefined;
  /**
   * Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only
   */
  premium_subscription_month_count?: number | undefined;
  /**
   * Optional. Number of undistributed prizes
   */
  unclaimed_prize_count?: number | undefined;
  /**
   * Optional. True, if only users who had joined the chats after the giveaway started were eligible to win
   */
  only_new_members?: boolean | undefined;
  /**
   * Optional. True, if the giveaway was canceled because the payment for it was refunded
   */
  was_refunded?: boolean | undefined;
  /**
   * Optional. Description of additional giveaway prize
   */
  prize_description?: string | undefined;
};
/**
 * This object represents a service message about the completion of a giveaway without public winners.
 *
 * @see https://core.telegram.org/bots/api#giveawaycompleted
 */
export type TgGiveawayCompleted = {
  /**
   * Number of winners in the giveaway
   */
  winner_count: number;
  /**
   * Optional. Number of undistributed prizes
   */
  unclaimed_prize_count?: number | undefined;
  /**
   * Optional. Message with the giveaway that was completed, if it wasn't deleted
   */
  giveaway_message?: TgMessage | undefined;
  /**
   * Optional. True, if the giveaway is a Telegram Star giveaway. Otherwise, currently, the giveaway is a Telegram Premium giveaway.
   */
  is_star_giveaway?: boolean | undefined;
};
/**
 * Describes the options used for link preview generation.
 *
 * @see https://core.telegram.org/bots/api#linkpreviewoptions
 */
export type TgLinkPreviewOptions = {
  /**
   * Optional. True, if the link preview is disabled
   */
  is_disabled?: boolean | undefined;
  /**
   * Optional. URL to use for the link preview. If empty, then the first URL found in the message text will be used
   */
  url?: string | undefined;
  /**
   * Optional. True, if the media in the link preview is supposed to be shrunk; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview
   */
  prefer_small_media?: boolean | undefined;
  /**
   * Optional. True, if the media in the link preview is supposed to be enlarged; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview
   */
  prefer_large_media?: boolean | undefined;
  /**
   * Optional. True, if the link preview must be shown above the message text; otherwise, the link preview will be shown below the message text
   */
  show_above_text?: boolean | undefined;
};
/**
 * This object represent a user's profile pictures.
 *
 * @see https://core.telegram.org/bots/api#userprofilephotos
 */
export type TgUserProfilePhotos = {
  /**
   * Total number of profile pictures the target user has
   */
  total_count: number;
  /**
   * Requested profile pictures (in up to 4 sizes each)
   */
  photos: TgPhotoSize[][];
};
/**
 * This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile.
 *
 * @see https://core.telegram.org/bots/api#file
 */
export type TgFile = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;
  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;
  /**
   * Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   */
  file_size?: number | undefined;
  /**
   * Optional. File path. Use https://api.telegram.org/file/bot<token>/<file_path> to get the file.
   */
  file_path?: string | undefined;
};
/**
 * Describes a Web App.
 *
 * @see https://core.telegram.org/bots/api#webappinfo
 */
export type TgWebAppInfo = {
  /**
   * An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps
   */
  url: string;
};
/**
 * This object represents a custom keyboard with reply options (see Introduction to bots for details and examples). Not supported in channels and for messages sent on behalf of a Telegram Business account.
 *
 * @see https://core.telegram.org/bots/api#replykeyboardmarkup
 */
export type TgReplyKeyboardMarkup = {
  /**
   * Array of button rows, each represented by an Array of KeyboardButton objects
   */
  keyboard: TgKeyboardButton[][];
  /**
   * Optional. Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to false, in which case the custom keyboard can be hidden and opened with a keyboard icon.
   */
  is_persistent?: boolean | undefined;
  /**
   * Optional. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard.
   */
  resize_keyboard?: boolean | undefined;
  /**
   * Optional. Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to false.
   */
  one_time_keyboard?: boolean | undefined;
  /**
   * Optional. The placeholder to be shown in the input field when the keyboard is active; 1-64 characters
   */
  input_field_placeholder?: string | undefined;
  /**
   * Optional. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message. Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard.
   */
  selective?: boolean | undefined;
};
/**
 * This object represents one button of the reply keyboard. At most one of the optional fields must be used to specify type of the button. For simple text buttons, String can be used instead of this object to specify the button text.
 *
 * Note: request_users and request_chat options will only work in Telegram versions released after 3 February, 2023. Older clients will display unsupported message.
 *
 * @see https://core.telegram.org/bots/api#keyboardbutton
 */
export type TgKeyboardButton = {
  /**
   * Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed
   */
  text: string;
  /**
   * Optional. If specified, pressing the button will open a list of suitable users. Identifiers of selected users will be sent to the bot in a "users_shared" service message. Available in private chats only.
   */
  request_users?: TgKeyboardButtonRequestUsers | undefined;
  /**
   * Optional. If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a "chat_shared" service message. Available in private chats only.
   */
  request_chat?: TgKeyboardButtonRequestChat | undefined;
  /**
   * Optional. If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only.
   */
  request_contact?: boolean | undefined;
  /**
   * Optional. If True, the user's current location will be sent when the button is pressed. Available in private chats only.
   */
  request_location?: boolean | undefined;
  /**
   * Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only.
   */
  request_poll?: TgKeyboardButtonPollType | undefined;
  /**
   * Optional. If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a "web_app_data" service message. Available in private chats only.
   */
  web_app?: TgWebAppInfo | undefined;
};
/**
 * This object defines the criteria used to request suitable users. Information about the selected users will be shared with the bot when the corresponding button is pressed. More about requesting users: https://core.telegram.org/bots/features#chat-and-user-selection
 *
 * @see https://core.telegram.org/bots/api#keyboardbuttonrequestusers
 */
export type TgKeyboardButtonRequestUsers = {
  /**
   * Signed 32-bit identifier of the request that will be received back in the UsersShared object. Must be unique within the message
   */
  request_id: number;
  /**
   * Optional. Pass True to request bots, pass False to request regular users. If not specified, no additional restrictions are applied.
   */
  user_is_bot?: boolean | undefined;
  /**
   * Optional. Pass True to request premium users, pass False to request non-premium users. If not specified, no additional restrictions are applied.
   */
  user_is_premium?: boolean | undefined;
  /**
   * Optional. The maximum number of users to be selected; 1-10. Defaults to 1.
   */
  max_quantity?: number | undefined;
  /**
   * Optional. Pass True to request the users' first and last names
   */
  request_name?: boolean | undefined;
  /**
   * Optional. Pass True to request the users' usernames
   */
  request_username?: boolean | undefined;
  /**
   * Optional. Pass True to request the users' photos
   */
  request_photo?: boolean | undefined;
};
/**
 * This object defines the criteria used to request a suitable chat. Information about the selected chat will be shared with the bot when the corresponding button is pressed. The bot will be granted requested rights in the chat if appropriate. More about requesting chats: https://core.telegram.org/bots/features#chat-and-user-selection.
 *
 * @see https://core.telegram.org/bots/api#keyboardbuttonrequestchat
 */
export type TgKeyboardButtonRequestChat = {
  /**
   * Signed 32-bit identifier of the request, which will be received back in the ChatShared object. Must be unique within the message
   */
  request_id: number;
  /**
   * Pass True to request a channel chat, pass False to request a group or a supergroup chat.
   */
  chat_is_channel: boolean;
  /**
   * Optional. Pass True to request a forum supergroup, pass False to request a non-forum chat. If not specified, no additional restrictions are applied.
   */
  chat_is_forum?: boolean | undefined;
  /**
   * Optional. Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username. If not specified, no additional restrictions are applied.
   */
  chat_has_username?: boolean | undefined;
  /**
   * Optional. Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied.
   */
  chat_is_created?: boolean | undefined;
  /**
   * Optional. A JSON-serialized object listing the required administrator rights of the user in the chat. The rights must be a superset of bot_administrator_rights. If not specified, no additional restrictions are applied.
   */
  user_administrator_rights?: Partial<TgChatAdministratorRights> | undefined;
  /**
   * Optional. A JSON-serialized object listing the required administrator rights of the bot in the chat. The rights must be a subset of user_administrator_rights. If not specified, no additional restrictions are applied.
   */
  bot_administrator_rights?: Partial<TgChatAdministratorRights> | undefined;
  /**
   * Optional. Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied.
   */
  bot_is_member?: boolean | undefined;
  /**
   * Optional. Pass True to request the chat's title
   */
  request_title?: boolean | undefined;
  /**
   * Optional. Pass True to request the chat's username
   */
  request_username?: boolean | undefined;
  /**
   * Optional. Pass True to request the chat's photo
   */
  request_photo?: boolean | undefined;
};
/**
 * This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.
 *
 * @see https://core.telegram.org/bots/api#keyboardbuttonpolltype
 */
export type TgKeyboardButtonPollType = {
  /**
   * Optional. If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type.
   */
  type?: string | undefined;
};
/**
 * Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup). Not supported in channels and for messages sent on behalf of a Telegram Business account.
 *
 * @see https://core.telegram.org/bots/api#replykeyboardremove
 */
export type TgReplyKeyboardRemove = {
  /**
   * Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup)
   */
  remove_keyboard: boolean;
  /**
   * Optional. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message. Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet.
   */
  selective?: boolean | undefined;
};
/**
 * This object represents an inline keyboard that appears right next to the message it belongs to.
 *
 * @see https://core.telegram.org/bots/api#inlinekeyboardmarkup
 */
export type TgInlineKeyboardMarkup = {
  /**
   * Array of button rows, each represented by an Array of InlineKeyboardButton objects
   */
  inline_keyboard: TgInlineKeyboardButton[][];
};
/**
 * This object represents one button of an inline keyboard. Exactly one of the optional fields must be used to specify type of the button.
 *
 * @see https://core.telegram.org/bots/api#inlinekeyboardbutton
 */
export type TgInlineKeyboardButton = {
  /**
   * Label text on the button
   */
  text: string;
  /**
   * Optional. HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=<user_id> can be used to mention a user by their identifier without using a username, if this is allowed by their privacy settings.
   */
  url?: string | undefined;
  /**
   * Optional. Data to be sent in a callback query to the bot when the button is pressed, 1-64 bytes
   */
  callback_data?: string | undefined;
  /**
   * Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. Not supported for messages sent on behalf of a Telegram Business account.
   */
  web_app?: TgWebAppInfo | undefined;
  /**
   * Optional. An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget.
   */
  login_url?: TgLoginUrl | undefined;
  /**
   * Optional. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted. Not supported for messages sent on behalf of a Telegram Business account.
   */
  switch_inline_query?: string | undefined;
  /**
   * Optional. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted. This offers a quick way for the user to open your bot in inline mode in the same chat - good for selecting something from multiple options. Not supported in channels and for messages sent on behalf of a Telegram Business account.
   */
  switch_inline_query_current_chat?: string | undefined;
  /**
   * Optional. If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot's username and the specified inline query in the input field. Not supported for messages sent on behalf of a Telegram Business account.
   */
  switch_inline_query_chosen_chat?: TgSwitchInlineQueryChosenChat | undefined;
  /**
   * Optional. Description of the button that copies the specified text to the clipboard.
   */
  copy_text?: TgCopyTextButton | undefined;
  /**
   * Optional. Description of the game that will be launched when the user presses the button. NOTE: This type of button must always be the first button in the first row.
   */
  callback_game?: TgCallbackGame | undefined;
  /**
   * Optional. Specify True, to send a Pay button. Substrings "⭐" and "XTR" in the buttons's text will be replaced with a Telegram Star icon. NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages.
   */
  pay?: boolean | undefined;
};
/**
 * This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the Telegram Login Widget when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:
 *
 * Telegram apps support these buttons as of version 5.7.
 *
 * @see https://core.telegram.org/bots/api#loginurl
 */
export type TgLoginUrl = {
  /**
   * An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in Receiving authorization data. NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in Checking authorization.
   */
  url: string;
  /**
   * Optional. New text of the button in forwarded messages.
   */
  forward_text?: string | undefined;
  /**
   * Optional. Username of a bot, which will be used for user authorization. See Setting up a bot for more details. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See Linking your domain to the bot for more details.
   */
  bot_username?: string | undefined;
  /**
   * Optional. Pass True to request the permission for your bot to send messages to the user.
   */
  request_write_access?: boolean | undefined;
};
/**
 * This object represents an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline query.
 *
 * @see https://core.telegram.org/bots/api#switchinlinequerychosenchat
 */
export type TgSwitchInlineQueryChosenChat = {
  /**
   * Optional. The default inline query to be inserted in the input field. If left empty, only the bot's username will be inserted
   */
  query?: string | undefined;
  /**
   * Optional. True, if private chats with users can be chosen
   */
  allow_user_chats?: boolean | undefined;
  /**
   * Optional. True, if private chats with bots can be chosen
   */
  allow_bot_chats?: boolean | undefined;
  /**
   * Optional. True, if group and supergroup chats can be chosen
   */
  allow_group_chats?: boolean | undefined;
  /**
   * Optional. True, if channel chats can be chosen
   */
  allow_channel_chats?: boolean | undefined;
};
/**
 * This object represents an inline keyboard button that copies specified text to the clipboard.
 *
 * @see https://core.telegram.org/bots/api#copytextbutton
 */
export type TgCopyTextButton = {
  /**
   * The text to be copied to the clipboard; 1-256 characters
   */
  text: string;
};
/**
 * This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present.
 *
 * @see https://core.telegram.org/bots/api#callbackquery
 */
export type TgCallbackQuery = {
  /**
   * Unique identifier for this query
   */
  id: string;
  /**
   * Sender
   */
  from: TgUser;
  /**
   * Optional. Message sent by the bot with the callback button that originated the query
   */
  message?: TgMaybeInaccessibleMessage | undefined;
  /**
   * Optional. Identifier of the message sent via the bot in inline mode, that originated the query.
   */
  inline_message_id?: string | undefined;
  /**
   * Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games.
   */
  chat_instance: string;
  /**
   * Optional. Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data.
   */
  data?: string | undefined;
  /**
   * Optional. Short name of a Game to be returned, serves as the unique identifier for the game
   */
  game_short_name?: string | undefined;
};
/**
 * Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode. Not supported in channels and for messages sent on behalf of a Telegram Business account.
 *
 * @see https://core.telegram.org/bots/api#forcereply
 */
export type TgForceReply = {
  /**
   * Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply'
   */
  force_reply: boolean;
  /**
   * Optional. The placeholder to be shown in the input field when the reply is active; 1-64 characters
   */
  input_field_placeholder?: string | undefined;
  /**
   * Optional. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.
   */
  selective?: boolean | undefined;
};
/**
 * This object represents a chat photo.
 *
 * @see https://core.telegram.org/bots/api#chatphoto
 */
export type TgChatPhoto = {
  /**
   * File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.
   */
  small_file_id: string;
  /**
   * Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  small_file_unique_id: string;
  /**
   * File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.
   */
  big_file_id: string;
  /**
   * Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  big_file_unique_id: string;
};
/**
 * Represents an invite link for a chat.
 *
 * @see https://core.telegram.org/bots/api#chatinvitelink
 */
export type TgChatInviteLink = {
  /**
   * The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with "...".
   */
  invite_link: string;
  /**
   * Creator of the link
   */
  creator: TgUser;
  /**
   * True, if users joining the chat via the link need to be approved by chat administrators
   */
  creates_join_request: boolean;
  /**
   * True, if the link is primary
   */
  is_primary: boolean;
  /**
   * True, if the link is revoked
   */
  is_revoked: boolean;
  /**
   * Optional. Invite link name
   */
  name?: string | undefined;
  /**
   * Optional. Point in time (Unix timestamp) when the link will expire or has been expired
   */
  expire_date?: number | undefined;
  /**
   * Optional. The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
   */
  member_limit?: number | undefined;
  /**
   * Optional. Number of pending join requests created using this link
   */
  pending_join_request_count?: number | undefined;
  /**
   * Optional. The number of seconds the subscription will be active for before the next payment
   */
  subscription_period?: number | undefined;
  /**
   * Optional. The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat using the link
   */
  subscription_price?: number | undefined;
};
/**
 * Represents the rights of an administrator in a chat.
 *
 * @see https://core.telegram.org/bots/api#chatadministratorrights
 */
export type TgChatAdministratorRights = {
  /**
   * True, if the user's presence in the chat is hidden
   */
  is_anonymous: boolean;
  /**
   * True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege.
   */
  can_manage_chat: boolean;
  /**
   * True, if the administrator can delete messages of other users
   */
  can_delete_messages: boolean;
  /**
   * True, if the administrator can manage video chats
   */
  can_manage_video_chats: boolean;
  /**
   * True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics
   */
  can_restrict_members: boolean;
  /**
   * True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)
   */
  can_promote_members: boolean;
  /**
   * True, if the user is allowed to change the chat title, photo and other settings
   */
  can_change_info: boolean;
  /**
   * True, if the user is allowed to invite new users to the chat
   */
  can_invite_users: boolean;
  /**
   * True, if the administrator can post stories to the chat
   */
  can_post_stories: boolean;
  /**
   * True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive
   */
  can_edit_stories: boolean;
  /**
   * True, if the administrator can delete stories posted by other users
   */
  can_delete_stories: boolean;
  /**
   * Optional. True, if the administrator can post messages in the channel, or access channel statistics; for channels only
   */
  can_post_messages?: boolean | undefined;
  /**
   * Optional. True, if the administrator can edit messages of other users and can pin messages; for channels only
   */
  can_edit_messages?: boolean | undefined;
  /**
   * Optional. True, if the user is allowed to pin messages; for groups and supergroups only
   */
  can_pin_messages?: boolean | undefined;
  /**
   * Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
   */
  can_manage_topics?: boolean | undefined;
};
/**
 * This object represents changes in the status of a chat member.
 *
 * @see https://core.telegram.org/bots/api#chatmemberupdated
 */
export type TgChatMemberUpdated = {
  /**
   * Chat the user belongs to
   */
  chat: TgChat;
  /**
   * Performer of the action, which resulted in the change
   */
  from: TgUser;
  /**
   * Date the change was done in Unix time
   */
  date: number;
  /**
   * Previous information about the chat member
   */
  old_chat_member: TgChatMember;
  /**
   * New information about the chat member
   */
  new_chat_member: TgChatMember;
  /**
   * Optional. Chat invite link, which was used by the user to join the chat; for joining by invite link events only.
   */
  invite_link?: TgChatInviteLink | undefined;
  /**
   * Optional. True, if the user joined the chat after sending a direct join request without using an invite link and being approved by an administrator
   */
  via_join_request?: boolean | undefined;
  /**
   * Optional. True, if the user joined the chat via a chat folder invite link
   */
  via_chat_folder_invite_link?: boolean | undefined;
};
/**
 * This object contains information about one member of a chat. Currently, the following 6 types of chat members are supported:
 *
 * - ChatMemberOwner
 *
 * - ChatMemberAdministrator
 *
 * - ChatMemberMember
 *
 * - ChatMemberRestricted
 *
 * - ChatMemberLeft
 *
 * - ChatMemberBanned
 *
 * @see https://core.telegram.org/bots/api#chatmember
 */
export type TgChatMember =
  | TgChatMemberOwner
  | TgChatMemberAdministrator
  | TgChatMemberMember
  | TgChatMemberRestricted
  | TgChatMemberLeft
  | TgChatMemberBanned;
/**
 * Represents a chat member that owns the chat and has all administrator privileges.
 *
 * @see https://core.telegram.org/bots/api#chatmemberowner
 */
export type TgChatMemberOwner = {
  /**
   * The member's status in the chat, always "creator"
   */
  status: "creator";
  /**
   * Information about the user
   */
  user: TgUser;
  /**
   * True, if the user's presence in the chat is hidden
   */
  is_anonymous: boolean;
  /**
   * Optional. Custom title for this user
   */
  custom_title?: string | undefined;
};
/**
 * Represents a chat member that has some additional privileges.
 *
 * @see https://core.telegram.org/bots/api#chatmemberadministrator
 */
export type TgChatMemberAdministrator = {
  /**
   * The member's status in the chat, always "administrator"
   */
  status: "administrator";
  /**
   * Information about the user
   */
  user: TgUser;
  /**
   * True, if the bot is allowed to edit administrator privileges of that user
   */
  can_be_edited: boolean;
  /**
   * True, if the user's presence in the chat is hidden
   */
  is_anonymous: boolean;
  /**
   * True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege.
   */
  can_manage_chat: boolean;
  /**
   * True, if the administrator can delete messages of other users
   */
  can_delete_messages: boolean;
  /**
   * True, if the administrator can manage video chats
   */
  can_manage_video_chats: boolean;
  /**
   * True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics
   */
  can_restrict_members: boolean;
  /**
   * True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)
   */
  can_promote_members: boolean;
  /**
   * True, if the user is allowed to change the chat title, photo and other settings
   */
  can_change_info: boolean;
  /**
   * True, if the user is allowed to invite new users to the chat
   */
  can_invite_users: boolean;
  /**
   * True, if the administrator can post stories to the chat
   */
  can_post_stories: boolean;
  /**
   * True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive
   */
  can_edit_stories: boolean;
  /**
   * True, if the administrator can delete stories posted by other users
   */
  can_delete_stories: boolean;
  /**
   * Optional. True, if the administrator can post messages in the channel, or access channel statistics; for channels only
   */
  can_post_messages?: boolean | undefined;
  /**
   * Optional. True, if the administrator can edit messages of other users and can pin messages; for channels only
   */
  can_edit_messages?: boolean | undefined;
  /**
   * Optional. True, if the user is allowed to pin messages; for groups and supergroups only
   */
  can_pin_messages?: boolean | undefined;
  /**
   * Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
   */
  can_manage_topics?: boolean | undefined;
  /**
   * Optional. Custom title for this user
   */
  custom_title?: string | undefined;
};
/**
 * Represents a chat member that has no additional privileges or restrictions.
 *
 * @see https://core.telegram.org/bots/api#chatmembermember
 */
export type TgChatMemberMember = {
  /**
   * The member's status in the chat, always "member"
   */
  status: "member";
  /**
   * Information about the user
   */
  user: TgUser;
  /**
   * Optional. Date when the user's subscription will expire; Unix time
   */
  until_date?: number | undefined;
};
/**
 * Represents a chat member that is under certain restrictions in the chat. Supergroups only.
 *
 * @see https://core.telegram.org/bots/api#chatmemberrestricted
 */
export type TgChatMemberRestricted = {
  /**
   * The member's status in the chat, always "restricted"
   */
  status: "restricted";
  /**
   * Information about the user
   */
  user: TgUser;
  /**
   * True, if the user is a member of the chat at the moment of the request
   */
  is_member: boolean;
  /**
   * True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues
   */
  can_send_messages: boolean;
  /**
   * True, if the user is allowed to send audios
   */
  can_send_audios: boolean;
  /**
   * True, if the user is allowed to send documents
   */
  can_send_documents: boolean;
  /**
   * True, if the user is allowed to send photos
   */
  can_send_photos: boolean;
  /**
   * True, if the user is allowed to send videos
   */
  can_send_videos: boolean;
  /**
   * True, if the user is allowed to send video notes
   */
  can_send_video_notes: boolean;
  /**
   * True, if the user is allowed to send voice notes
   */
  can_send_voice_notes: boolean;
  /**
   * True, if the user is allowed to send polls
   */
  can_send_polls: boolean;
  /**
   * True, if the user is allowed to send animations, games, stickers and use inline bots
   */
  can_send_other_messages: boolean;
  /**
   * True, if the user is allowed to add web page previews to their messages
   */
  can_add_web_page_previews: boolean;
  /**
   * True, if the user is allowed to change the chat title, photo and other settings
   */
  can_change_info: boolean;
  /**
   * True, if the user is allowed to invite new users to the chat
   */
  can_invite_users: boolean;
  /**
   * True, if the user is allowed to pin messages
   */
  can_pin_messages: boolean;
  /**
   * True, if the user is allowed to create forum topics
   */
  can_manage_topics: boolean;
  /**
   * Date when restrictions will be lifted for this user; Unix time. If 0, then the user is restricted forever
   */
  until_date: number;
};
/**
 * Represents a chat member that isn't currently a member of the chat, but may join it themselves.
 *
 * @see https://core.telegram.org/bots/api#chatmemberleft
 */
export type TgChatMemberLeft = {
  /**
   * The member's status in the chat, always "left"
   */
  status: "left";
  /**
   * Information about the user
   */
  user: TgUser;
};
/**
 * Represents a chat member that was banned in the chat and can't return to the chat or view chat messages.
 *
 * @see https://core.telegram.org/bots/api#chatmemberbanned
 */
export type TgChatMemberBanned = {
  /**
   * The member's status in the chat, always "kicked"
   */
  status: "kicked";
  /**
   * Information about the user
   */
  user: TgUser;
  /**
   * Date when restrictions will be lifted for this user; Unix time. If 0, then the user is banned forever
   */
  until_date: number;
};
/**
 * Represents a join request sent to a chat.
 *
 * @see https://core.telegram.org/bots/api#chatjoinrequest
 */
export type TgChatJoinRequest = {
  /**
   * Chat to which the request was sent
   */
  chat: TgChat;
  /**
   * User that sent the join request
   */
  from: TgUser;
  /**
   * Identifier of a private chat with the user who sent the join request. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot can use this identifier for 5 minutes to send messages until the join request is processed, assuming no other administrator contacted the user.
   */
  user_chat_id: number;
  /**
   * Date the request was sent in Unix time
   */
  date: number;
  /**
   * Optional. Bio of the user.
   */
  bio?: string | undefined;
  /**
   * Optional. Chat invite link that was used by the user to send the join request
   */
  invite_link?: TgChatInviteLink | undefined;
};
/**
 * Describes actions that a non-administrator user is allowed to take in a chat.
 *
 * @see https://core.telegram.org/bots/api#chatpermissions
 */
export type TgChatPermissions = {
  /**
   * Optional. True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues
   */
  can_send_messages?: boolean | undefined;
  /**
   * Optional. True, if the user is allowed to send audios
   */
  can_send_audios?: boolean | undefined;
  /**
   * Optional. True, if the user is allowed to send documents
   */
  can_send_documents?: boolean | undefined;
  /**
   * Optional. True, if the user is allowed to send photos
   */
  can_send_photos?: boolean | undefined;
  /**
   * Optional. True, if the user is allowed to send videos
   */
  can_send_videos?: boolean | undefined;
  /**
   * Optional. True, if the user is allowed to send video notes
   */
  can_send_video_notes?: boolean | undefined;
  /**
   * Optional. True, if the user is allowed to send voice notes
   */
  can_send_voice_notes?: boolean | undefined;
  /**
   * Optional. True, if the user is allowed to send polls
   */
  can_send_polls?: boolean | undefined;
  /**
   * Optional. True, if the user is allowed to send animations, games, stickers and use inline bots
   */
  can_send_other_messages?: boolean | undefined;
  /**
   * Optional. True, if the user is allowed to add web page previews to their messages
   */
  can_add_web_page_previews?: boolean | undefined;
  /**
   * Optional. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups
   */
  can_change_info?: boolean | undefined;
  /**
   * Optional. True, if the user is allowed to invite new users to the chat
   */
  can_invite_users?: boolean | undefined;
  /**
   * Optional. True, if the user is allowed to pin messages. Ignored in public supergroups
   */
  can_pin_messages?: boolean | undefined;
  /**
   * Optional. True, if the user is allowed to create forum topics. If omitted defaults to the value of can_pin_messages
   */
  can_manage_topics?: boolean | undefined;
};
/**
 * Describes the birthdate of a user.
 *
 * @see https://core.telegram.org/bots/api#birthdate
 */
export type TgBirthdate = {
  /**
   * Day of the user's birth; 1-31
   */
  day: number;
  /**
   * Month of the user's birth; 1-12
   */
  month: number;
  /**
   * Optional. Year of the user's birth
   */
  year?: number | undefined;
};
/**
 * Contains information about the start page settings of a Telegram Business account.
 *
 * @see https://core.telegram.org/bots/api#businessintro
 */
export type TgBusinessIntro = {
  /**
   * Optional. Title text of the business intro
   */
  title?: string | undefined;
  /**
   * Optional. Message text of the business intro
   */
  message?: string | undefined;
  /**
   * Optional. Sticker of the business intro
   */
  sticker?: TgSticker | undefined;
};
/**
 * Contains information about the location of a Telegram Business account.
 *
 * @see https://core.telegram.org/bots/api#businesslocation
 */
export type TgBusinessLocation = {
  /**
   * Address of the business
   */
  address: string;
  /**
   * Optional. Location of the business
   */
  location?: TgLocation | undefined;
};
/**
 * Describes an interval of time during which a business is open.
 *
 * @see https://core.telegram.org/bots/api#businessopeninghoursinterval
 */
export type TgBusinessOpeningHoursInterval = {
  /**
   * The minute's sequence number in a week, starting on Monday, marking the start of the time interval during which the business is open; 0 - 7 * 24 * 60
   */
  opening_minute: number;
  /**
   * The minute's sequence number in a week, starting on Monday, marking the end of the time interval during which the business is open; 0 - 8 * 24 * 60
   */
  closing_minute: number;
};
/**
 * Describes the opening hours of a business.
 *
 * @see https://core.telegram.org/bots/api#businessopeninghours
 */
export type TgBusinessOpeningHours = {
  /**
   * Unique name of the time zone for which the opening hours are defined
   */
  time_zone_name: string;
  /**
   * List of time intervals describing business opening hours
   */
  opening_hours: TgBusinessOpeningHoursInterval[];
};
/**
 * Describes the position of a clickable area within a story.
 *
 * @see https://core.telegram.org/bots/api#storyareaposition
 */
export type TgStoryAreaPosition = {
  /**
   * The abscissa of the area's center, as a percentage of the media width
   */
  x_percentage: number;
  /**
   * The ordinate of the area's center, as a percentage of the media height
   */
  y_percentage: number;
  /**
   * The width of the area's rectangle, as a percentage of the media width
   */
  width_percentage: number;
  /**
   * The height of the area's rectangle, as a percentage of the media height
   */
  height_percentage: number;
  /**
   * The clockwise rotation angle of the rectangle, in degrees; 0-360
   */
  rotation_angle: number;
  /**
   * The radius of the rectangle corner rounding, as a percentage of the media width
   */
  corner_radius_percentage: number;
};
/**
 * Describes the physical address of a location.
 *
 * @see https://core.telegram.org/bots/api#locationaddress
 */
export type TgLocationAddress = {
  /**
   * The two-letter ISO 3166-1 alpha-2 country code of the country where the location is located
   */
  country_code: string;
  /**
   * Optional. State of the location
   */
  state?: string | undefined;
  /**
   * Optional. City of the location
   */
  city?: string | undefined;
  /**
   * Optional. Street address of the location
   */
  street?: string | undefined;
};
/**
 * Describes the type of a clickable area on a story. Currently, it can be one of
 *
 * - StoryAreaTypeLocation
 *
 * - StoryAreaTypeSuggestedReaction
 *
 * - StoryAreaTypeLink
 *
 * - StoryAreaTypeWeather
 *
 * - StoryAreaTypeUniqueGift
 *
 * @see https://core.telegram.org/bots/api#storyareatype
 */
export type TgStoryAreaType =
  | TgStoryAreaTypeLocation
  | TgStoryAreaTypeSuggestedReaction
  | TgStoryAreaTypeLink
  | TgStoryAreaTypeWeather
  | TgStoryAreaTypeUniqueGift;
/**
 * Describes a story area pointing to a location. Currently, a story can have up to 10 location areas.
 *
 * @see https://core.telegram.org/bots/api#storyareatypelocation
 */
export type TgStoryAreaTypeLocation = {
  /**
   * Type of the area, always "location"
   */
  type: "location";
  /**
   * Location latitude in degrees
   */
  latitude: number;
  /**
   * Location longitude in degrees
   */
  longitude: number;
  /**
   * Optional. Address of the location
   */
  address?: TgLocationAddress | undefined;
};
/**
 * Describes a story area pointing to a suggested reaction. Currently, a story can have up to 5 suggested reaction areas.
 *
 * @see https://core.telegram.org/bots/api#storyareatypesuggestedreaction
 */
export type TgStoryAreaTypeSuggestedReaction = {
  /**
   * Type of the area, always "suggested_reaction"
   */
  type: "suggested_reaction";
  /**
   * Type of the reaction
   */
  reaction_type: TgReactionType;
  /**
   * Optional. Pass True if the reaction area has a dark background
   */
  is_dark?: boolean | undefined;
  /**
   * Optional. Pass True if reaction area corner is flipped
   */
  is_flipped?: boolean | undefined;
};
/**
 * Describes a story area pointing to an HTTP or tg:// link. Currently, a story can have up to 3 link areas.
 *
 * @see https://core.telegram.org/bots/api#storyareatypelink
 */
export type TgStoryAreaTypeLink = {
  /**
   * Type of the area, always "link"
   */
  type: "link";
  /**
   * HTTP or tg:// URL to be opened when the area is clicked
   */
  url: string;
};
/**
 * Describes a story area containing weather information. Currently, a story can have up to 3 weather areas.
 *
 * @see https://core.telegram.org/bots/api#storyareatypeweather
 */
export type TgStoryAreaTypeWeather = {
  /**
   * Type of the area, always "weather"
   */
  type: "weather";
  /**
   * Temperature, in degree Celsius
   */
  temperature: number;
  /**
   * Emoji representing the weather
   */
  emoji: string;
  /**
   * A color of the area background in the ARGB format
   */
  background_color: number;
};
/**
 * Describes a story area pointing to a unique gift. Currently, a story can have at most 1 unique gift area.
 *
 * @see https://core.telegram.org/bots/api#storyareatypeuniquegift
 */
export type TgStoryAreaTypeUniqueGift = {
  /**
   * Type of the area, always "unique_gift"
   */
  type: "unique_gift";
  /**
   * Unique name of the gift
   */
  name: string;
};
/**
 * Describes a clickable area on a story media.
 *
 * @see https://core.telegram.org/bots/api#storyarea
 */
export type TgStoryArea = {
  /**
   * Position of the area
   */
  position: TgStoryAreaPosition;
  /**
   * Type of the area
   */
  type: TgStoryAreaType;
};
/**
 * Represents a location to which a chat is connected.
 *
 * @see https://core.telegram.org/bots/api#chatlocation
 */
export type TgChatLocation = {
  /**
   * The location to which the supergroup is connected. Can't be a live location.
   */
  location: TgLocation;
  /**
   * Location address; 1-64 characters, as defined by the chat owner
   */
  address: string;
};
/**
 * This object describes the type of a reaction. Currently, it can be one of
 *
 * - ReactionTypeEmoji
 *
 * - ReactionTypeCustomEmoji
 *
 * - ReactionTypePaid
 *
 * @see https://core.telegram.org/bots/api#reactiontype
 */
export type TgReactionType = TgReactionTypeEmoji | TgReactionTypeCustomEmoji | TgReactionTypePaid;
/**
 * The reaction is based on an emoji.
 *
 * @see https://core.telegram.org/bots/api#reactiontypeemoji
 */
export type TgReactionTypeEmoji = {
  /**
   * Type of the reaction, always "emoji"
   */
  type: "emoji";
  /**
   * Reaction emoji. Currently, it can be one of "👍", "👎", "❤", "🔥", "🥰", "👏", "😁", "🤔", "🤯", "😱", "🤬", "😢", "🎉", "🤩", "🤮", "💩", "🙏", "👌", "🕊", "🤡", "🥱", "🥴", "😍", "🐳", "❤‍🔥", "🌚", "🌭", "💯", "🤣", "⚡", "🍌", "🏆", "💔", "🤨", "😐", "🍓", "🍾", "💋", "🖕", "😈", "😴", "😭", "🤓", "👻", "👨‍💻", "👀", "🎃", "🙈", "😇", "😨", "🤝", "✍", "🤗", "🫡", "🎅", "🎄", "☃", "💅", "🤪", "🗿", "🆒", "💘", "🙉", "🦄", "😘", "💊", "🙊", "😎", "👾", "🤷‍♂", "🤷", "🤷‍♀", "😡"
   */
  emoji:
    | "\uD83D\uDC4D"
    | "\uD83D\uDC4E"
    | "\u2764"
    | "\uD83D\uDD25"
    | "\uD83E\uDD70"
    | "\uD83D\uDC4F"
    | "\uD83D\uDE01"
    | "\uD83E\uDD14"
    | "\uD83E\uDD2F"
    | "\uD83D\uDE31"
    | "\uD83E\uDD2C"
    | "\uD83D\uDE22"
    | "\uD83C\uDF89"
    | "\uD83E\uDD29"
    | "\uD83E\uDD2E"
    | "\uD83D\uDCA9"
    | "\uD83D\uDE4F"
    | "\uD83D\uDC4C"
    | "\uD83D\uDD4A"
    | "\uD83E\uDD21"
    | "\uD83E\uDD71"
    | "\uD83E\uDD74"
    | "\uD83D\uDE0D"
    | "\uD83D\uDC33"
    | "\u2764\u200D\uD83D\uDD25"
    | "\uD83C\uDF1A"
    | "\uD83C\uDF2D"
    | "\uD83D\uDCAF"
    | "\uD83E\uDD23"
    | "\u26A1"
    | "\uD83C\uDF4C"
    | "\uD83C\uDFC6"
    | "\uD83D\uDC94"
    | "\uD83E\uDD28"
    | "\uD83D\uDE10"
    | "\uD83C\uDF53"
    | "\uD83C\uDF7E"
    | "\uD83D\uDC8B"
    | "\uD83D\uDD95"
    | "\uD83D\uDE08"
    | "\uD83D\uDE34"
    | "\uD83D\uDE2D"
    | "\uD83E\uDD13"
    | "\uD83D\uDC7B"
    | "\uD83D\uDC68\u200D\uD83D\uDCBB"
    | "\uD83D\uDC40"
    | "\uD83C\uDF83"
    | "\uD83D\uDE48"
    | "\uD83D\uDE07"
    | "\uD83D\uDE28"
    | "\uD83E\uDD1D"
    | "\u270D"
    | "\uD83E\uDD17"
    | "\uD83E\uDEE1"
    | "\uD83C\uDF85"
    | "\uD83C\uDF84"
    | "\u2603"
    | "\uD83D\uDC85"
    | "\uD83E\uDD2A"
    | "\uD83D\uDDFF"
    | "\uD83C\uDD92"
    | "\uD83D\uDC98"
    | "\uD83D\uDE49"
    | "\uD83E\uDD84"
    | "\uD83D\uDE18"
    | "\uD83D\uDC8A"
    | "\uD83D\uDE4A"
    | "\uD83D\uDE0E"
    | "\uD83D\uDC7E"
    | "\uD83E\uDD37\u200D\u2642"
    | "\uD83E\uDD37"
    | "\uD83E\uDD37\u200D\u2640"
    | "\uD83D\uDE21";
};
/**
 * The reaction is based on a custom emoji.
 *
 * @see https://core.telegram.org/bots/api#reactiontypecustomemoji
 */
export type TgReactionTypeCustomEmoji = {
  /**
   * Type of the reaction, always "custom_emoji"
   */
  type: "custom_emoji";
  /**
   * Custom emoji identifier
   */
  custom_emoji_id: string;
};
/**
 * The reaction is paid.
 *
 * @see https://core.telegram.org/bots/api#reactiontypepaid
 */
export type TgReactionTypePaid = {
  /**
   * Type of the reaction, always "paid"
   */
  type: "paid";
};
/**
 * Represents a reaction added to a message along with the number of times it was added.
 *
 * @see https://core.telegram.org/bots/api#reactioncount
 */
export type TgReactionCount = {
  /**
   * Type of the reaction
   */
  type: TgReactionType;
  /**
   * Number of times the reaction was added
   */
  total_count: number;
};
/**
 * This object represents a change of a reaction on a message performed by a user.
 *
 * @see https://core.telegram.org/bots/api#messagereactionupdated
 */
export type TgMessageReactionUpdated = {
  /**
   * The chat containing the message the user reacted to
   */
  chat: TgChat;
  /**
   * Unique identifier of the message inside the chat
   */
  message_id: number;
  /**
   * Optional. The user that changed the reaction, if the user isn't anonymous
   */
  user?: TgUser | undefined;
  /**
   * Optional. The chat on behalf of which the reaction was changed, if the user is anonymous
   */
  actor_chat?: TgChat | undefined;
  /**
   * Date of the change in Unix time
   */
  date: number;
  /**
   * Previous list of reaction types that were set by the user
   */
  old_reaction: TgReactionType[];
  /**
   * New list of reaction types that have been set by the user
   */
  new_reaction: TgReactionType[];
};
/**
 * This object represents reaction changes on a message with anonymous reactions.
 *
 * @see https://core.telegram.org/bots/api#messagereactioncountupdated
 */
export type TgMessageReactionCountUpdated = {
  /**
   * The chat containing the message
   */
  chat: TgChat;
  /**
   * Unique message identifier inside the chat
   */
  message_id: number;
  /**
   * Date of the change in Unix time
   */
  date: number;
  /**
   * List of reactions that are present on the message
   */
  reactions: TgReactionCount[];
};
/**
 * This object represents a forum topic.
 *
 * @see https://core.telegram.org/bots/api#forumtopic
 */
export type TgForumTopic = {
  /**
   * Unique identifier of the forum topic
   */
  message_thread_id: number;
  /**
   * Name of the topic
   */
  name: string;
  /**
   * Color of the topic icon in RGB format
   */
  icon_color: number;
  /**
   * Optional. Unique identifier of the custom emoji shown as the topic icon
   */
  icon_custom_emoji_id?: string | undefined;
};
/**
 * This object represents a gift that can be sent by the bot.
 *
 * @see https://core.telegram.org/bots/api#gift
 */
export type TgGift = {
  /**
   * Unique identifier of the gift
   */
  id: string;
  /**
   * The sticker that represents the gift
   */
  sticker: TgSticker;
  /**
   * The number of Telegram Stars that must be paid to send the sticker
   */
  star_count: number;
  /**
   * Optional. The number of Telegram Stars that must be paid to upgrade the gift to a unique one
   */
  upgrade_star_count?: number | undefined;
  /**
   * Optional. The total number of the gifts of this type that can be sent; for limited gifts only
   */
  total_count?: number | undefined;
  /**
   * Optional. The number of remaining gifts of this type that can be sent; for limited gifts only
   */
  remaining_count?: number | undefined;
};
/**
 * This object represent a list of gifts.
 *
 * @see https://core.telegram.org/bots/api#gifts
 */
export type TgGifts = {
  /**
   * The list of gifts
   */
  gifts: TgGift[];
};
/**
 * This object describes the model of a unique gift.
 *
 * @see https://core.telegram.org/bots/api#uniquegiftmodel
 */
export type TgUniqueGiftModel = {
  /**
   * Name of the model
   */
  name: string;
  /**
   * The sticker that represents the unique gift
   */
  sticker: TgSticker;
  /**
   * The number of unique gifts that receive this model for every 1000 gifts upgraded
   */
  rarity_per_mille: number;
};
/**
 * This object describes the symbol shown on the pattern of a unique gift.
 *
 * @see https://core.telegram.org/bots/api#uniquegiftsymbol
 */
export type TgUniqueGiftSymbol = {
  /**
   * Name of the symbol
   */
  name: string;
  /**
   * The sticker that represents the unique gift
   */
  sticker: TgSticker;
  /**
   * The number of unique gifts that receive this model for every 1000 gifts upgraded
   */
  rarity_per_mille: number;
};
/**
 * This object describes the colors of the backdrop of a unique gift.
 *
 * @see https://core.telegram.org/bots/api#uniquegiftbackdropcolors
 */
export type TgUniqueGiftBackdropColors = {
  /**
   * The color in the center of the backdrop in RGB format
   */
  center_color: number;
  /**
   * The color on the edges of the backdrop in RGB format
   */
  edge_color: number;
  /**
   * The color to be applied to the symbol in RGB format
   */
  symbol_color: number;
  /**
   * The color for the text on the backdrop in RGB format
   */
  text_color: number;
};
/**
 * This object describes the backdrop of a unique gift.
 *
 * @see https://core.telegram.org/bots/api#uniquegiftbackdrop
 */
export type TgUniqueGiftBackdrop = {
  /**
   * Name of the backdrop
   */
  name: string;
  /**
   * Colors of the backdrop
   */
  colors: TgUniqueGiftBackdropColors;
  /**
   * The number of unique gifts that receive this backdrop for every 1000 gifts upgraded
   */
  rarity_per_mille: number;
};
/**
 * This object describes a unique gift that was upgraded from a regular gift.
 *
 * @see https://core.telegram.org/bots/api#uniquegift
 */
export type TgUniqueGift = {
  /**
   * Human-readable name of the regular gift from which this unique gift was upgraded
   */
  base_name: string;
  /**
   * Unique name of the gift. This name can be used in https://t.me/nft/... links and story areas
   */
  name: string;
  /**
   * Unique number of the upgraded gift among gifts upgraded from the same regular gift
   */
  number: number;
  /**
   * Model of the gift
   */
  model: TgUniqueGiftModel;
  /**
   * Symbol of the gift
   */
  symbol: TgUniqueGiftSymbol;
  /**
   * Backdrop of the gift
   */
  backdrop: TgUniqueGiftBackdrop;
};
/**
 * Describes a service message about a regular gift that was sent or received.
 *
 * @see https://core.telegram.org/bots/api#giftinfo
 */
export type TgGiftInfo = {
  /**
   * Information about the gift
   */
  gift: TgGift;
  /**
   * Optional. Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts
   */
  owned_gift_id?: string | undefined;
  /**
   * Optional. Number of Telegram Stars that can be claimed by the receiver by converting the gift; omitted if conversion to Telegram Stars is impossible
   */
  convert_star_count?: number | undefined;
  /**
   * Optional. Number of Telegram Stars that were prepaid by the sender for the ability to upgrade the gift
   */
  prepaid_upgrade_star_count?: number | undefined;
  /**
   * Optional. True, if the gift can be upgraded to a unique gift
   */
  can_be_upgraded?: boolean | undefined;
  /**
   * Optional. Text of the message that was added to the gift
   */
  text?: string | undefined;
  /**
   * Optional. Special entities that appear in the text
   */
  entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. True, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them
   */
  is_private?: boolean | undefined;
};
/**
 * Describes a service message about a unique gift that was sent or received.
 *
 * @see https://core.telegram.org/bots/api#uniquegiftinfo
 */
export type TgUniqueGiftInfo = {
  /**
   * Information about the gift
   */
  gift: TgUniqueGift;
  /**
   * Origin of the gift. Currently, either "upgrade" or "transfer"
   */
  origin: "upgrade" | "transfer";
  /**
   * Optional. Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts
   */
  owned_gift_id?: string | undefined;
  /**
   * Optional. Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift
   */
  transfer_star_count?: number | undefined;
};
/**
 * This object describes a gift received and owned by a user or a chat. Currently, it can be one of
 *
 * - OwnedGiftRegular
 *
 * - OwnedGiftUnique
 *
 * @see https://core.telegram.org/bots/api#ownedgift
 */
export type TgOwnedGift = TgOwnedGiftRegular | TgOwnedGiftUnique;
/**
 * Describes a regular gift owned by a user or a chat.
 *
 * @see https://core.telegram.org/bots/api#ownedgiftregular
 */
export type TgOwnedGiftRegular = {
  /**
   * Type of the gift, always "regular"
   */
  type: "regular";
  /**
   * Information about the regular gift
   */
  gift: TgGift;
  /**
   * Optional. Unique identifier of the gift for the bot; for gifts received on behalf of business accounts only
   */
  owned_gift_id?: string | undefined;
  /**
   * Optional. Sender of the gift if it is a known user
   */
  sender_user?: TgUser | undefined;
  /**
   * Date the gift was sent in Unix time
   */
  send_date: number;
  /**
   * Optional. Text of the message that was added to the gift
   */
  text?: string | undefined;
  /**
   * Optional. Special entities that appear in the text
   */
  entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. True, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them
   */
  is_private?: boolean | undefined;
  /**
   * Optional. True, if the gift is displayed on the account's profile page; for gifts received on behalf of business accounts only
   */
  is_saved?: boolean | undefined;
  /**
   * Optional. True, if the gift can be upgraded to a unique gift; for gifts received on behalf of business accounts only
   */
  can_be_upgraded?: boolean | undefined;
  /**
   * Optional. True, if the gift was refunded and isn't available anymore
   */
  was_refunded?: boolean | undefined;
  /**
   * Optional. Number of Telegram Stars that can be claimed by the receiver instead of the gift; omitted if the gift cannot be converted to Telegram Stars
   */
  convert_star_count?: number | undefined;
  /**
   * Optional. Number of Telegram Stars that were paid by the sender for the ability to upgrade the gift
   */
  prepaid_upgrade_star_count?: number | undefined;
};
/**
 * Describes a unique gift received and owned by a user or a chat.
 *
 * @see https://core.telegram.org/bots/api#ownedgiftunique
 */
export type TgOwnedGiftUnique = {
  /**
   * Type of the gift, always "unique"
   */
  type: "unique";
  /**
   * Information about the unique gift
   */
  gift: TgUniqueGift;
  /**
   * Optional. Unique identifier of the received gift for the bot; for gifts received on behalf of business accounts only
   */
  owned_gift_id?: string | undefined;
  /**
   * Optional. Sender of the gift if it is a known user
   */
  sender_user?: TgUser | undefined;
  /**
   * Date the gift was sent in Unix time
   */
  send_date: number;
  /**
   * Optional. True, if the gift is displayed on the account's profile page; for gifts received on behalf of business accounts only
   */
  is_saved?: boolean | undefined;
  /**
   * Optional. True, if the gift can be transferred to another owner; for gifts received on behalf of business accounts only
   */
  can_be_transferred?: boolean | undefined;
  /**
   * Optional. Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift
   */
  transfer_star_count?: number | undefined;
};
/**
 * Contains the list of gifts received and owned by a user or a chat.
 *
 * @see https://core.telegram.org/bots/api#ownedgifts
 */
export type TgOwnedGifts = {
  /**
   * The total number of gifts owned by the user or the chat
   */
  total_count: number;
  /**
   * The list of gifts
   */
  gifts: TgOwnedGift[];
  /**
   * Optional. Offset for the next request. If empty, then there are no more results
   */
  next_offset?: string | undefined;
};
/**
 * This object describes the types of gifts that can be gifted to a user or a chat.
 *
 * @see https://core.telegram.org/bots/api#acceptedgifttypes
 */
export type TgAcceptedGiftTypes = {
  /**
   * True, if unlimited regular gifts are accepted
   */
  unlimited_gifts: boolean;
  /**
   * True, if limited regular gifts are accepted
   */
  limited_gifts: boolean;
  /**
   * True, if unique gifts or gifts that can be upgraded to unique for free are accepted
   */
  unique_gifts: boolean;
  /**
   * True, if a Telegram Premium subscription is accepted
   */
  premium_subscription: boolean;
};
/**
 * Describes an amount of Telegram Stars.
 *
 * @see https://core.telegram.org/bots/api#staramount
 */
export type TgStarAmount = {
  /**
   * Integer amount of Telegram Stars, rounded to 0; can be negative
   */
  amount: number;
  /**
   * Optional. The number of 1/1000000000 shares of Telegram Stars; from -999999999 to 999999999; can be negative if and only if amount is non-positive
   */
  nanostar_amount?: number | undefined;
};
/**
 * This object represents a bot command.
 *
 * @see https://core.telegram.org/bots/api#botcommand
 */
export type TgBotCommand = {
  /**
   * Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores.
   */
  command: string;
  /**
   * Description of the command; 1-256 characters.
   */
  description: string;
};
/**
 * This object represents the scope to which bot commands are applied. Currently, the following 7 scopes are supported:
 *
 * - BotCommandScopeDefault
 *
 * - BotCommandScopeAllPrivateChats
 *
 * - BotCommandScopeAllGroupChats
 *
 * - BotCommandScopeAllChatAdministrators
 *
 * - BotCommandScopeChat
 *
 * - BotCommandScopeChatAdministrators
 *
 * - BotCommandScopeChatMember
 *
 * @see https://core.telegram.org/bots/api#botcommandscope
 */
export type TgBotCommandScope =
  | TgBotCommandScopeDefault
  | TgBotCommandScopeAllPrivateChats
  | TgBotCommandScopeAllGroupChats
  | TgBotCommandScopeAllChatAdministrators
  | TgBotCommandScopeChat
  | TgBotCommandScopeChatAdministrators
  | TgBotCommandScopeChatMember;
/**
 * Represents the default scope of bot commands. Default commands are used if no commands with a narrower scope are specified for the user.
 *
 * @see https://core.telegram.org/bots/api#botcommandscopedefault
 */
export type TgBotCommandScopeDefault = {
  /**
   * Scope type, must be default
   */
  type: "default";
};
/**
 * Represents the scope of bot commands, covering all private chats.
 *
 * @see https://core.telegram.org/bots/api#botcommandscopeallprivatechats
 */
export type TgBotCommandScopeAllPrivateChats = {
  /**
   * Scope type, must be all_private_chats
   */
  type: "all_private_chats";
};
/**
 * Represents the scope of bot commands, covering all group and supergroup chats.
 *
 * @see https://core.telegram.org/bots/api#botcommandscopeallgroupchats
 */
export type TgBotCommandScopeAllGroupChats = {
  /**
   * Scope type, must be all_group_chats
   */
  type: "all_group_chats";
};
/**
 * Represents the scope of bot commands, covering all group and supergroup chat administrators.
 *
 * @see https://core.telegram.org/bots/api#botcommandscopeallchatadministrators
 */
export type TgBotCommandScopeAllChatAdministrators = {
  /**
   * Scope type, must be all_chat_administrators
   */
  type: "all_chat_administrators";
};
/**
 * Represents the scope of bot commands, covering a specific chat.
 *
 * @see https://core.telegram.org/bots/api#botcommandscopechat
 */
export type TgBotCommandScopeChat = {
  /**
   * Scope type, must be chat
   */
  type: "chat";
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
};
/**
 * Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat.
 *
 * @see https://core.telegram.org/bots/api#botcommandscopechatadministrators
 */
export type TgBotCommandScopeChatAdministrators = {
  /**
   * Scope type, must be chat_administrators
   */
  type: "chat_administrators";
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
};
/**
 * Represents the scope of bot commands, covering a specific member of a group or supergroup chat.
 *
 * @see https://core.telegram.org/bots/api#botcommandscopechatmember
 */
export type TgBotCommandScopeChatMember = {
  /**
   * Scope type, must be chat_member
   */
  type: "chat_member";
  /**
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
   */
  chat_id: number | string;
  /**
   * Unique identifier of the target user
   */
  user_id: number;
};
/**
 * This object represents the bot's name.
 *
 * @see https://core.telegram.org/bots/api#botname
 */
export type TgBotName = {
  /**
   * The bot's name
   */
  name: string;
};
/**
 * This object represents the bot's description.
 *
 * @see https://core.telegram.org/bots/api#botdescription
 */
export type TgBotDescription = {
  /**
   * The bot's description
   */
  description: string;
};
/**
 * This object represents the bot's short description.
 *
 * @see https://core.telegram.org/bots/api#botshortdescription
 */
export type TgBotShortDescription = {
  /**
   * The bot's short description
   */
  short_description: string;
};
/**
 * This object describes the bot's menu button in a private chat. It should be one of
 *
 * - MenuButtonCommands
 *
 * - MenuButtonWebApp
 *
 * - MenuButtonDefault
 *
 * If a menu button other than MenuButtonDefault is set for a private chat, then it is applied in the chat. Otherwise the default menu button is applied. By default, the menu button opens the list of bot commands.
 *
 * @see https://core.telegram.org/bots/api#menubutton
 */
export type TgMenuButton = TgMenuButtonCommands | TgMenuButtonWebApp | TgMenuButtonDefault;
/**
 * Represents a menu button, which opens the bot's list of commands.
 *
 * @see https://core.telegram.org/bots/api#menubuttoncommands
 */
export type TgMenuButtonCommands = {
  /**
   * Type of the button, must be commands
   */
  type: "commands";
};
/**
 * Represents a menu button, which launches a Web App.
 *
 * @see https://core.telegram.org/bots/api#menubuttonwebapp
 */
export type TgMenuButtonWebApp = {
  /**
   * Type of the button, must be web_app
   */
  type: "web_app";
  /**
   * Text on the button
   */
  text: string;
  /**
   * Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Alternatively, a t.me link to a Web App of the bot can be specified in the object instead of the Web App's URL, in which case the Web App will be opened as if the user pressed the link.
   */
  web_app: TgWebAppInfo;
};
/**
 * Describes that no specific value for the menu button was set.
 *
 * @see https://core.telegram.org/bots/api#menubuttondefault
 */
export type TgMenuButtonDefault = {
  /**
   * Type of the button, must be default
   */
  type: "default";
};
/**
 * This object describes the source of a chat boost. It can be one of
 *
 * - ChatBoostSourcePremium
 *
 * - ChatBoostSourceGiftCode
 *
 * - ChatBoostSourceGiveaway
 *
 * @see https://core.telegram.org/bots/api#chatboostsource
 */
export type TgChatBoostSource =
  | TgChatBoostSourcePremium
  | TgChatBoostSourceGiftCode
  | TgChatBoostSourceGiveaway;
/**
 * The boost was obtained by subscribing to Telegram Premium or by gifting a Telegram Premium subscription to another user.
 *
 * @see https://core.telegram.org/bots/api#chatboostsourcepremium
 */
export type TgChatBoostSourcePremium = {
  /**
   * Source of the boost, always "premium"
   */
  source: "premium";
  /**
   * User that boosted the chat
   */
  user: TgUser;
};
/**
 * The boost was obtained by the creation of Telegram Premium gift codes to boost a chat. Each such code boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription.
 *
 * @see https://core.telegram.org/bots/api#chatboostsourcegiftcode
 */
export type TgChatBoostSourceGiftCode = {
  /**
   * Source of the boost, always "gift_code"
   */
  source: "gift_code";
  /**
   * User for which the gift code was created
   */
  user: TgUser;
};
/**
 * The boost was obtained by the creation of a Telegram Premium or a Telegram Star giveaway. This boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription for Telegram Premium giveaways and prize_star_count / 500 times for one year for Telegram Star giveaways.
 *
 * @see https://core.telegram.org/bots/api#chatboostsourcegiveaway
 */
export type TgChatBoostSourceGiveaway = {
  /**
   * Source of the boost, always "giveaway"
   */
  source: "giveaway";
  /**
   * Identifier of a message in the chat with the giveaway; the message could have been deleted already. May be 0 if the message isn't sent yet.
   */
  giveaway_message_id: number;
  /**
   * Optional. User that won the prize in the giveaway if any; for Telegram Premium giveaways only
   */
  user?: TgUser | undefined;
  /**
   * Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
   */
  prize_star_count?: number | undefined;
  /**
   * Optional. True, if the giveaway was completed, but there was no user to win the prize
   */
  is_unclaimed?: boolean | undefined;
};
/**
 * This object contains information about a chat boost.
 *
 * @see https://core.telegram.org/bots/api#chatboost
 */
export type TgChatBoost = {
  /**
   * Unique identifier of the boost
   */
  boost_id: string;
  /**
   * Point in time (Unix timestamp) when the chat was boosted
   */
  add_date: number;
  /**
   * Point in time (Unix timestamp) when the boost will automatically expire, unless the booster's Telegram Premium subscription is prolonged
   */
  expiration_date: number;
  /**
   * Source of the added boost
   */
  source: TgChatBoostSource;
};
/**
 * This object represents a boost added to a chat or changed.
 *
 * @see https://core.telegram.org/bots/api#chatboostupdated
 */
export type TgChatBoostUpdated = {
  /**
   * Chat which was boosted
   */
  chat: TgChat;
  /**
   * Information about the chat boost
   */
  boost: TgChatBoost;
};
/**
 * This object represents a boost removed from a chat.
 *
 * @see https://core.telegram.org/bots/api#chatboostremoved
 */
export type TgChatBoostRemoved = {
  /**
   * Chat which was boosted
   */
  chat: TgChat;
  /**
   * Unique identifier of the boost
   */
  boost_id: string;
  /**
   * Point in time (Unix timestamp) when the boost was removed
   */
  remove_date: number;
  /**
   * Source of the removed boost
   */
  source: TgChatBoostSource;
};
/**
 * This object represents a list of boosts added to a chat by a user.
 *
 * @see https://core.telegram.org/bots/api#userchatboosts
 */
export type TgUserChatBoosts = {
  /**
   * The list of boosts added to the chat by the user
   */
  boosts: TgChatBoost[];
};
/**
 * Represents the rights of a business bot.
 *
 * @see https://core.telegram.org/bots/api#businessbotrights
 */
export type TgBusinessBotRights = {
  /**
   * Optional. True, if the bot can send and edit messages in the private chats that had incoming messages in the last 24 hours
   */
  can_reply?: boolean | undefined;
  /**
   * Optional. True, if the bot can mark incoming private messages as read
   */
  can_read_messages?: boolean | undefined;
  /**
   * Optional. True, if the bot can delete messages sent by the bot
   */
  can_delete_outgoing_messages?: boolean | undefined;
  /**
   * Optional. True, if the bot can delete all private messages in managed chats
   */
  can_delete_all_messages?: boolean | undefined;
  /**
   * Optional. True, if the bot can edit the first and last name of the business account
   */
  can_edit_name?: boolean | undefined;
  /**
   * Optional. True, if the bot can edit the bio of the business account
   */
  can_edit_bio?: boolean | undefined;
  /**
   * Optional. True, if the bot can edit the profile photo of the business account
   */
  can_edit_profile_photo?: boolean | undefined;
  /**
   * Optional. True, if the bot can edit the username of the business account
   */
  can_edit_username?: boolean | undefined;
  /**
   * Optional. True, if the bot can change the privacy settings pertaining to gifts for the business account
   */
  can_change_gift_settings?: boolean | undefined;
  /**
   * Optional. True, if the bot can view gifts and the amount of Telegram Stars owned by the business account
   */
  can_view_gifts_and_stars?: boolean | undefined;
  /**
   * Optional. True, if the bot can convert regular gifts owned by the business account to Telegram Stars
   */
  can_convert_gifts_to_stars?: boolean | undefined;
  /**
   * Optional. True, if the bot can transfer and upgrade gifts owned by the business account
   */
  can_transfer_and_upgrade_gifts?: boolean | undefined;
  /**
   * Optional. True, if the bot can transfer Telegram Stars received by the business account to its own account, or use them to upgrade and transfer gifts
   */
  can_transfer_stars?: boolean | undefined;
  /**
   * Optional. True, if the bot can post, edit and delete stories on behalf of the business account
   */
  can_manage_stories?: boolean | undefined;
};
/**
 * Describes the connection of the bot with a business account.
 *
 * @see https://core.telegram.org/bots/api#businessconnection
 */
export type TgBusinessConnection = {
  /**
   * Unique identifier of the business connection
   */
  id: string;
  /**
   * Business account user that created the business connection
   */
  user: TgUser;
  /**
   * Identifier of a private chat with the user who created the business connection. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  user_chat_id: number;
  /**
   * Date the connection was established in Unix time
   */
  date: number;
  /**
   * Optional. Rights of the business bot
   */
  rights?: TgBusinessBotRights | undefined;
  /**
   * True, if the connection is active
   */
  is_enabled: boolean;
};
/**
 * This object is received when messages are deleted from a connected business account.
 *
 * @see https://core.telegram.org/bots/api#businessmessagesdeleted
 */
export type TgBusinessMessagesDeleted = {
  /**
   * Unique identifier of the business connection
   */
  business_connection_id: string;
  /**
   * Information about a chat in the business account. The bot may not have access to the chat or the corresponding user.
   */
  chat: TgChat;
  /**
   * The list of identifiers of deleted messages in the chat of the business account
   */
  message_ids: number[];
};
/**
 * Describes why a request was unsuccessful.
 *
 * @see https://core.telegram.org/bots/api#responseparameters
 */
export type TgResponseParameters = {
  /**
   * Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  migrate_to_chat_id?: number | undefined;
  /**
   * Optional. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated
   */
  retry_after?: number | undefined;
};
/**
 * This object represents the content of a media message to be sent. It should be one of
 *
 * - InputMediaAnimation
 *
 * - InputMediaDocument
 *
 * - InputMediaAudio
 *
 * - InputMediaPhoto
 *
 * - InputMediaVideo
 *
 * @see https://core.telegram.org/bots/api#inputmedia
 */
export type TgInputMedia =
  | TgInputMediaAnimation
  | TgInputMediaDocument
  | TgInputMediaAudio
  | TgInputMediaPhoto
  | TgInputMediaVideo;
/**
 * Represents a photo to be sent.
 *
 * @see https://core.telegram.org/bots/api#inputmediaphoto
 */
export type TgInputMediaPhoto = {
  /**
   * Type of the result, must be photo
   */
  type: "photo";
  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  media: string | Blob;
  /**
   * Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean | undefined;
  /**
   * Optional. Pass True if the photo needs to be covered with a spoiler animation
   */
  has_spoiler?: boolean | undefined;
};
/**
 * Represents a video to be sent.
 *
 * @see https://core.telegram.org/bots/api#inputmediavideo
 */
export type TgInputMediaVideo = {
  /**
   * Type of the result, must be video
   */
  type: "video";
  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  media: string | Blob;
  /**
   * Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  thumbnail?: string | undefined;
  /**
   * Optional. Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  cover?: string | undefined;
  /**
   * Optional. Start timestamp for the video in the message
   */
  start_timestamp?: number | undefined;
  /**
   * Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the video caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean | undefined;
  /**
   * Optional. Video width
   */
  width?: number | undefined;
  /**
   * Optional. Video height
   */
  height?: number | undefined;
  /**
   * Optional. Video duration in seconds
   */
  duration?: number | undefined;
  /**
   * Optional. Pass True if the uploaded video is suitable for streaming
   */
  supports_streaming?: boolean | undefined;
  /**
   * Optional. Pass True if the video needs to be covered with a spoiler animation
   */
  has_spoiler?: boolean | undefined;
};
/**
 * Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.
 *
 * @see https://core.telegram.org/bots/api#inputmediaanimation
 */
export type TgInputMediaAnimation = {
  /**
   * Type of the result, must be animation
   */
  type: "animation";
  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  media: string | Blob;
  /**
   * Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  thumbnail?: string | undefined;
  /**
   * Optional. Caption of the animation to be sent, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the animation caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean | undefined;
  /**
   * Optional. Animation width
   */
  width?: number | undefined;
  /**
   * Optional. Animation height
   */
  height?: number | undefined;
  /**
   * Optional. Animation duration in seconds
   */
  duration?: number | undefined;
  /**
   * Optional. Pass True if the animation needs to be covered with a spoiler animation
   */
  has_spoiler?: boolean | undefined;
};
/**
 * Represents an audio file to be treated as music to be sent.
 *
 * @see https://core.telegram.org/bots/api#inputmediaaudio
 */
export type TgInputMediaAudio = {
  /**
   * Type of the result, must be audio
   */
  type: "audio";
  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  media: string | Blob;
  /**
   * Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  thumbnail?: string | undefined;
  /**
   * Optional. Caption of the audio to be sent, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Duration of the audio in seconds
   */
  duration?: number | undefined;
  /**
   * Optional. Performer of the audio
   */
  performer?: string | undefined;
  /**
   * Optional. Title of the audio
   */
  title?: string | undefined;
};
/**
 * Represents a general file to be sent.
 *
 * @see https://core.telegram.org/bots/api#inputmediadocument
 */
export type TgInputMediaDocument = {
  /**
   * Type of the result, must be document
   */
  type: "document";
  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  media: string | Blob;
  /**
   * Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  thumbnail?: string | undefined;
  /**
   * Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the document caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always True, if the document is sent as part of an album.
   */
  disable_content_type_detection?: boolean | undefined;
};
/**
 * This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.
 *
 * @see https://core.telegram.org/bots/api#inputfile
 */
export type TgInputFile = Blob;
/**
 * This object describes the paid media to be sent. Currently, it can be one of
 *
 * - InputPaidMediaPhoto
 *
 * - InputPaidMediaVideo
 *
 * @see https://core.telegram.org/bots/api#inputpaidmedia
 */
export type TgInputPaidMedia = TgInputPaidMediaPhoto | TgInputPaidMediaVideo;
/**
 * The paid media to send is a photo.
 *
 * @see https://core.telegram.org/bots/api#inputpaidmediaphoto
 */
export type TgInputPaidMediaPhoto = {
  /**
   * Type of the media, must be photo
   */
  type: "photo";
  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  media: string;
};
/**
 * The paid media to send is a video.
 *
 * @see https://core.telegram.org/bots/api#inputpaidmediavideo
 */
export type TgInputPaidMediaVideo = {
  /**
   * Type of the media, must be video
   */
  type: "video";
  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  media: string;
  /**
   * Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  thumbnail?: string | undefined;
  /**
   * Optional. Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  cover?: string | undefined;
  /**
   * Optional. Start timestamp for the video in the message
   */
  start_timestamp?: number | undefined;
  /**
   * Optional. Video width
   */
  width?: number | undefined;
  /**
   * Optional. Video height
   */
  height?: number | undefined;
  /**
   * Optional. Video duration in seconds
   */
  duration?: number | undefined;
  /**
   * Optional. Pass True if the uploaded video is suitable for streaming
   */
  supports_streaming?: boolean | undefined;
};
/**
 * This object describes a profile photo to set. Currently, it can be one of
 *
 * - InputProfilePhotoStatic
 *
 * - InputProfilePhotoAnimated
 *
 * @see https://core.telegram.org/bots/api#inputprofilephoto
 */
export type TgInputProfilePhoto = TgInputProfilePhotoStatic | TgInputProfilePhotoAnimated;
/**
 * A static profile photo in the .JPG format.
 *
 * @see https://core.telegram.org/bots/api#inputprofilephotostatic
 */
export type TgInputProfilePhotoStatic = {
  /**
   * Type of the profile photo, must be "static"
   */
  type: string;
  /**
   * The static profile photo. Profile photos can't be reused and can only be uploaded as a new file, so you can pass "attach://<file_attach_name>" if the photo was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  photo: string;
};
/**
 * An animated profile photo in the MPEG4 format.
 *
 * @see https://core.telegram.org/bots/api#inputprofilephotoanimated
 */
export type TgInputProfilePhotoAnimated = {
  /**
   * Type of the profile photo, must be "animated"
   */
  type: string;
  /**
   * The animated profile photo. Profile photos can't be reused and can only be uploaded as a new file, so you can pass "attach://<file_attach_name>" if the photo was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  animation: string;
  /**
   * Optional. Timestamp in seconds of the frame that will be used as the static profile photo. Defaults to 0.0.
   */
  main_frame_timestamp?: number | undefined;
};
/**
 * This object describes the content of a story to post. Currently, it can be one of
 *
 * - InputStoryContentPhoto
 *
 * - InputStoryContentVideo
 *
 * @see https://core.telegram.org/bots/api#inputstorycontent
 */
export type TgInputStoryContent = TgInputStoryContentPhoto | TgInputStoryContentVideo;
/**
 * Describes a photo to post as a story.
 *
 * @see https://core.telegram.org/bots/api#inputstorycontentphoto
 */
export type TgInputStoryContentPhoto = {
  /**
   * Type of the content, must be "photo"
   */
  type: string;
  /**
   * The photo to post as a story. The photo must be of the size 1080x1920 and must not exceed 10 MB. The photo can't be reused and can only be uploaded as a new file, so you can pass "attach://<file_attach_name>" if the photo was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  photo: string;
};
/**
 * Describes a video to post as a story.
 *
 * @see https://core.telegram.org/bots/api#inputstorycontentvideo
 */
export type TgInputStoryContentVideo = {
  /**
   * Type of the content, must be "video"
   */
  type: string;
  /**
   * The video to post as a story. The video must be of the size 720x1280, streamable, encoded with H.265 codec, with key frames added each second in the MPEG4 format, and must not exceed 30 MB. The video can't be reused and can only be uploaded as a new file, so you can pass "attach://<file_attach_name>" if the video was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  video: string;
  /**
   * Optional. Precise duration of the video in seconds; 0-60
   */
  duration?: number | undefined;
  /**
   * Optional. Timestamp in seconds of the frame that will be used as the static cover for the story. Defaults to 0.0.
   */
  cover_frame_timestamp?: number | undefined;
  /**
   * Optional. Pass True if the video has no sound
   */
  is_animation?: boolean | undefined;
};
/**
 * This object represents a sticker.
 *
 * @see https://core.telegram.org/bots/api#sticker
 */
export type TgSticker = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;
  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;
  /**
   * Type of the sticker, currently one of "regular", "mask", "custom_emoji". The type of the sticker is independent from its format, which is determined by the fields is_animated and is_video.
   */
  type: "regular" | "mask" | "custom_emoji";
  /**
   * Sticker width
   */
  width: number;
  /**
   * Sticker height
   */
  height: number;
  /**
   * True, if the sticker is animated
   */
  is_animated: boolean;
  /**
   * True, if the sticker is a video sticker
   */
  is_video: boolean;
  /**
   * Optional. Sticker thumbnail in the .WEBP or .JPG format
   */
  thumbnail?: TgPhotoSize | undefined;
  /**
   * Optional. Emoji associated with the sticker
   */
  emoji?: string | undefined;
  /**
   * Optional. Name of the sticker set to which the sticker belongs
   */
  set_name?: string | undefined;
  /**
   * Optional. For premium regular stickers, premium animation for the sticker
   */
  premium_animation?: TgFile | undefined;
  /**
   * Optional. For mask stickers, the position where the mask should be placed
   */
  mask_position?: TgMaskPosition | undefined;
  /**
   * Optional. For custom emoji stickers, unique identifier of the custom emoji
   */
  custom_emoji_id?: string | undefined;
  /**
   * Optional. True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places
   */
  needs_repainting?: boolean | undefined;
  /**
   * Optional. File size in bytes
   */
  file_size?: number | undefined;
};
/**
 * This object represents a sticker set.
 *
 * @see https://core.telegram.org/bots/api#stickerset
 */
export type TgStickerSet = {
  /**
   * Sticker set name
   */
  name: string;
  /**
   * Sticker set title
   */
  title: string;
  /**
   * Type of stickers in the set, currently one of "regular", "mask", "custom_emoji"
   */
  sticker_type: "regular" | "mask" | "custom_emoji";
  /**
   * List of all set stickers
   */
  stickers: TgSticker[];
  /**
   * Optional. Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format
   */
  thumbnail?: TgPhotoSize | undefined;
};
/**
 * This object describes the position on faces where a mask should be placed by default.
 *
 * @see https://core.telegram.org/bots/api#maskposition
 */
export type TgMaskPosition = {
  /**
   * The part of the face relative to which the mask should be placed. One of "forehead", "eyes", "mouth", or "chin".
   */
  point: "forehead" | "eyes" | "mouth" | "chin";
  /**
   * Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position.
   */
  x_shift: number;
  /**
   * Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position.
   */
  y_shift: number;
  /**
   * Mask scaling coefficient. For example, 2.0 means double size.
   */
  scale: number;
};
/**
 * This object describes a sticker to be added to a sticker set.
 *
 * @see https://core.telegram.org/bots/api#inputsticker
 */
export type TgInputSticker = {
  /**
   * The added sticker. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new file using multipart/form-data under <file_attach_name> name. Animated and video stickers can't be uploaded via HTTP URL. More information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  sticker: string;
  /**
   * Format of the added sticker, must be one of "static" for a .WEBP or .PNG image, "animated" for a .TGS animation, "video" for a .WEBM video
   */
  format: "static" | "animated" | "video";
  /**
   * List of 1-20 emoji associated with the sticker
   */
  emoji_list: string[];
  /**
   * Optional. Position where the mask should be placed on faces. For "mask" stickers only.
   */
  mask_position?: TgMaskPosition | undefined;
  /**
   * Optional. List of 0-20 search keywords for the sticker with total length of up to 64 characters. For "regular" and "custom_emoji" stickers only.
   */
  keywords?: string[] | undefined;
};
/**
 * This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.
 *
 * @see https://core.telegram.org/bots/api#inlinequery
 */
export type TgInlineQuery = {
  /**
   * Unique identifier for this query
   */
  id: string;
  /**
   * Sender
   */
  from: TgUser;
  /**
   * Text of the query (up to 256 characters)
   */
  query: string;
  /**
   * Offset of the results to be returned, can be controlled by the bot
   */
  offset: string;
  /**
   * Optional. Type of the chat from which the inline query was sent. Can be either "sender" for a private chat with the inline query sender, "private", "group", "supergroup", or "channel". The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat
   */
  chat_type?: "sender" | "private" | "group" | "supergroup" | "channel" | undefined;
  /**
   * Optional. Sender location, only for bots that request user location
   */
  location?: TgLocation | undefined;
};
/**
 * This object represents a button to be shown above inline query results. You must use exactly one of the optional fields.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultsbutton
 */
export type TgInlineQueryResultsButton = {
  /**
   * Label text on the button
   */
  text: string;
  /**
   * Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to switch back to the inline mode using the method switchInlineQuery inside the Web App.
   */
  web_app?: TgWebAppInfo | undefined;
  /**
   * Optional. Deep-linking parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed. Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.
   */
  start_parameter?: string | undefined;
};
/**
 * This object represents one result of an inline query. Telegram clients currently support results of the following 20 types:
 *
 * - InlineQueryResultCachedAudio
 *
 * - InlineQueryResultCachedDocument
 *
 * - InlineQueryResultCachedGif
 *
 * - InlineQueryResultCachedMpeg4Gif
 *
 * - InlineQueryResultCachedPhoto
 *
 * - InlineQueryResultCachedSticker
 *
 * - InlineQueryResultCachedVideo
 *
 * - InlineQueryResultCachedVoice
 *
 * - InlineQueryResultArticle
 *
 * - InlineQueryResultAudio
 *
 * - InlineQueryResultContact
 *
 * - InlineQueryResultGame
 *
 * - InlineQueryResultDocument
 *
 * - InlineQueryResultGif
 *
 * - InlineQueryResultLocation
 *
 * - InlineQueryResultMpeg4Gif
 *
 * - InlineQueryResultPhoto
 *
 * - InlineQueryResultVenue
 *
 * - InlineQueryResultVideo
 *
 * - InlineQueryResultVoice
 *
 * Note: All URLs passed in inline query results will be available to end users and therefore must be assumed to be public.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresult
 */
export type TgInlineQueryResult =
  | TgInlineQueryResultCachedAudio
  | TgInlineQueryResultCachedDocument
  | TgInlineQueryResultCachedGif
  | TgInlineQueryResultCachedMpeg4Gif
  | TgInlineQueryResultCachedPhoto
  | TgInlineQueryResultCachedSticker
  | TgInlineQueryResultCachedVideo
  | TgInlineQueryResultCachedVoice
  | TgInlineQueryResultArticle
  | TgInlineQueryResultAudio
  | TgInlineQueryResultContact
  | TgInlineQueryResultGame
  | TgInlineQueryResultDocument
  | TgInlineQueryResultGif
  | TgInlineQueryResultLocation
  | TgInlineQueryResultMpeg4Gif
  | TgInlineQueryResultPhoto
  | TgInlineQueryResultVenue
  | TgInlineQueryResultVideo
  | TgInlineQueryResultVoice;
/**
 * Represents a link to an article or web page.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultarticle
 */
export type TgInlineQueryResultArticle = {
  /**
   * Type of the result, must be article
   */
  type: "article";
  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;
  /**
   * Title of the result
   */
  title: string;
  /**
   * Content of the message to be sent
   */
  input_message_content: TgInputMessageContent;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
  /**
   * Optional. URL of the result
   */
  url?: string | undefined;
  /**
   * Optional. Short description of the result
   */
  description?: string | undefined;
  /**
   * Optional. Url of the thumbnail for the result
   */
  thumbnail_url?: string | undefined;
  /**
   * Optional. Thumbnail width
   */
  thumbnail_width?: number | undefined;
  /**
   * Optional. Thumbnail height
   */
  thumbnail_height?: number | undefined;
};
/**
 * Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultphoto
 */
export type TgInlineQueryResultPhoto = {
  /**
   * Type of the result, must be photo
   */
  type: "photo";
  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;
  /**
   * A valid URL of the photo. Photo must be in JPEG format. Photo size must not exceed 5MB
   */
  photo_url: string;
  /**
   * URL of the thumbnail for the photo
   */
  thumbnail_url: string;
  /**
   * Optional. Width of the photo
   */
  photo_width?: number | undefined;
  /**
   * Optional. Height of the photo
   */
  photo_height?: number | undefined;
  /**
   * Optional. Title for the result
   */
  title?: string | undefined;
  /**
   * Optional. Short description of the result
   */
  description?: string | undefined;
  /**
   * Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean | undefined;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
  /**
   * Optional. Content of the message to be sent instead of the photo
   */
  input_message_content?: TgInputMessageContent | undefined;
};
/**
 * Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultgif
 */
export type TgInlineQueryResultGif = {
  /**
   * Type of the result, must be gif
   */
  type: "gif";
  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;
  /**
   * A valid URL for the GIF file
   */
  gif_url: string;
  /**
   * Optional. Width of the GIF
   */
  gif_width?: number | undefined;
  /**
   * Optional. Height of the GIF
   */
  gif_height?: number | undefined;
  /**
   * Optional. Duration of the GIF in seconds
   */
  gif_duration?: number | undefined;
  /**
   * URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
   */
  thumbnail_url: string;
  /**
   * Optional. MIME type of the thumbnail, must be one of "image/jpeg", "image/gif", or "video/mp4". Defaults to "image/jpeg"
   */
  thumbnail_mime_type?: "image/jpeg" | "image/gif" | "video/mp4" | undefined;
  /**
   * Optional. Title for the result
   */
  title?: string | undefined;
  /**
   * Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean | undefined;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
  /**
   * Optional. Content of the message to be sent instead of the GIF animation
   */
  input_message_content?: TgInputMessageContent | undefined;
};
/**
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultmpeg4gif
 */
export type TgInlineQueryResultMpeg4Gif = {
  /**
   * Type of the result, must be mpeg4_gif
   */
  type: "mpeg4_gif";
  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;
  /**
   * A valid URL for the MPEG4 file
   */
  mpeg4_url: string;
  /**
   * Optional. Video width
   */
  mpeg4_width?: number | undefined;
  /**
   * Optional. Video height
   */
  mpeg4_height?: number | undefined;
  /**
   * Optional. Video duration in seconds
   */
  mpeg4_duration?: number | undefined;
  /**
   * URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
   */
  thumbnail_url: string;
  /**
   * Optional. MIME type of the thumbnail, must be one of "image/jpeg", "image/gif", or "video/mp4". Defaults to "image/jpeg"
   */
  thumbnail_mime_type?: "image/jpeg" | "image/gif" | "video/mp4" | undefined;
  /**
   * Optional. Title for the result
   */
  title?: string | undefined;
  /**
   * Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean | undefined;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
  /**
   * Optional. Content of the message to be sent instead of the video animation
   */
  input_message_content?: TgInputMessageContent | undefined;
};
/**
 * Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultvideo
 */
export type TgInlineQueryResultVideo = {
  /**
   * Type of the result, must be video
   */
  type: "video";
  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;
  /**
   * A valid URL for the embedded video player or video file
   */
  video_url: string;
  /**
   * MIME type of the content of the video URL, "text/html" or "video/mp4"
   */
  mime_type: string;
  /**
   * URL of the thumbnail (JPEG only) for the video
   */
  thumbnail_url: string;
  /**
   * Title for the result
   */
  title: string;
  /**
   * Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the video caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean | undefined;
  /**
   * Optional. Video width
   */
  video_width?: number | undefined;
  /**
   * Optional. Video height
   */
  video_height?: number | undefined;
  /**
   * Optional. Video duration in seconds
   */
  video_duration?: number | undefined;
  /**
   * Optional. Short description of the result
   */
  description?: string | undefined;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
  /**
   * Optional. Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video).
   */
  input_message_content?: TgInputMessageContent | undefined;
};
/**
 * Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultaudio
 */
export type TgInlineQueryResultAudio = {
  /**
   * Type of the result, must be audio
   */
  type: "audio";
  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;
  /**
   * A valid URL for the audio file
   */
  audio_url: string;
  /**
   * Title
   */
  title: string;
  /**
   * Optional. Caption, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Performer
   */
  performer?: string | undefined;
  /**
   * Optional. Audio duration in seconds
   */
  audio_duration?: number | undefined;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
  /**
   * Optional. Content of the message to be sent instead of the audio
   */
  input_message_content?: TgInputMessageContent | undefined;
};
/**
 * Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultvoice
 */
export type TgInlineQueryResultVoice = {
  /**
   * Type of the result, must be voice
   */
  type: "voice";
  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;
  /**
   * A valid URL for the voice recording
   */
  voice_url: string;
  /**
   * Recording title
   */
  title: string;
  /**
   * Optional. Caption, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Recording duration in seconds
   */
  voice_duration?: number | undefined;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
  /**
   * Optional. Content of the message to be sent instead of the voice recording
   */
  input_message_content?: TgInputMessageContent | undefined;
};
/**
 * Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultdocument
 */
export type TgInlineQueryResultDocument = {
  /**
   * Type of the result, must be document
   */
  type: "document";
  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;
  /**
   * Title for the result
   */
  title: string;
  /**
   * Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the document caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * A valid URL for the file
   */
  document_url: string;
  /**
   * MIME type of the content of the file, either "application/pdf" or "application/zip"
   */
  mime_type: "application/pdf" | "application/zip";
  /**
   * Optional. Short description of the result
   */
  description?: string | undefined;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
  /**
   * Optional. Content of the message to be sent instead of the file
   */
  input_message_content?: TgInputMessageContent | undefined;
  /**
   * Optional. URL of the thumbnail (JPEG only) for the file
   */
  thumbnail_url?: string | undefined;
  /**
   * Optional. Thumbnail width
   */
  thumbnail_width?: number | undefined;
  /**
   * Optional. Thumbnail height
   */
  thumbnail_height?: number | undefined;
};
/**
 * Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultlocation
 */
export type TgInlineQueryResultLocation = {
  /**
   * Type of the result, must be location
   */
  type: "location";
  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;
  /**
   * Location latitude in degrees
   */
  latitude: number;
  /**
   * Location longitude in degrees
   */
  longitude: number;
  /**
   * Location title
   */
  title: string;
  /**
   * Optional. The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontal_accuracy?: number | undefined;
  /**
   * Optional. Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
   */
  live_period?: number | undefined;
  /**
   * Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
   */
  heading?: number | undefined;
  /**
   * Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
   */
  proximity_alert_radius?: number | undefined;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
  /**
   * Optional. Content of the message to be sent instead of the location
   */
  input_message_content?: TgInputMessageContent | undefined;
  /**
   * Optional. Url of the thumbnail for the result
   */
  thumbnail_url?: string | undefined;
  /**
   * Optional. Thumbnail width
   */
  thumbnail_width?: number | undefined;
  /**
   * Optional. Thumbnail height
   */
  thumbnail_height?: number | undefined;
};
/**
 * Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultvenue
 */
export type TgInlineQueryResultVenue = {
  /**
   * Type of the result, must be venue
   */
  type: "venue";
  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;
  /**
   * Latitude of the venue location in degrees
   */
  latitude: number;
  /**
   * Longitude of the venue location in degrees
   */
  longitude: number;
  /**
   * Title of the venue
   */
  title: string;
  /**
   * Address of the venue
   */
  address: string;
  /**
   * Optional. Foursquare identifier of the venue if known
   */
  foursquare_id?: string | undefined;
  /**
   * Optional. Foursquare type of the venue, if known. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)
   */
  foursquare_type?: string | undefined;
  /**
   * Optional. Google Places identifier of the venue
   */
  google_place_id?: string | undefined;
  /**
   * Optional. Google Places type of the venue. (See supported types.)
   */
  google_place_type?: string | undefined;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
  /**
   * Optional. Content of the message to be sent instead of the venue
   */
  input_message_content?: TgInputMessageContent | undefined;
  /**
   * Optional. Url of the thumbnail for the result
   */
  thumbnail_url?: string | undefined;
  /**
   * Optional. Thumbnail width
   */
  thumbnail_width?: number | undefined;
  /**
   * Optional. Thumbnail height
   */
  thumbnail_height?: number | undefined;
};
/**
 * Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultcontact
 */
export type TgInlineQueryResultContact = {
  /**
   * Type of the result, must be contact
   */
  type: "contact";
  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;
  /**
   * Contact's phone number
   */
  phone_number: string;
  /**
   * Contact's first name
   */
  first_name: string;
  /**
   * Optional. Contact's last name
   */
  last_name?: string | undefined;
  /**
   * Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes
   */
  vcard?: string | undefined;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
  /**
   * Optional. Content of the message to be sent instead of the contact
   */
  input_message_content?: TgInputMessageContent | undefined;
  /**
   * Optional. Url of the thumbnail for the result
   */
  thumbnail_url?: string | undefined;
  /**
   * Optional. Thumbnail width
   */
  thumbnail_width?: number | undefined;
  /**
   * Optional. Thumbnail height
   */
  thumbnail_height?: number | undefined;
};
/**
 * Represents a Game.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultgame
 */
export type TgInlineQueryResultGame = {
  /**
   * Type of the result, must be game
   */
  type: "game";
  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;
  /**
   * Short name of the game
   */
  game_short_name: string;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
};
/**
 * Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultcachedphoto
 */
export type TgInlineQueryResultCachedPhoto = {
  /**
   * Type of the result, must be photo
   */
  type: "photo";
  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;
  /**
   * A valid file identifier of the photo
   */
  photo_file_id: string;
  /**
   * Optional. Title for the result
   */
  title?: string | undefined;
  /**
   * Optional. Short description of the result
   */
  description?: string | undefined;
  /**
   * Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean | undefined;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
  /**
   * Optional. Content of the message to be sent instead of the photo
   */
  input_message_content?: TgInputMessageContent | undefined;
};
/**
 * Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with specified content instead of the animation.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultcachedgif
 */
export type TgInlineQueryResultCachedGif = {
  /**
   * Type of the result, must be gif
   */
  type: "gif";
  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;
  /**
   * A valid file identifier for the GIF file
   */
  gif_file_id: string;
  /**
   * Optional. Title for the result
   */
  title?: string | undefined;
  /**
   * Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean | undefined;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
  /**
   * Optional. Content of the message to be sent instead of the GIF animation
   */
  input_message_content?: TgInputMessageContent | undefined;
};
/**
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultcachedmpeg4gif
 */
export type TgInlineQueryResultCachedMpeg4Gif = {
  /**
   * Type of the result, must be mpeg4_gif
   */
  type: "mpeg4_gif";
  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;
  /**
   * A valid file identifier for the MPEG4 file
   */
  mpeg4_file_id: string;
  /**
   * Optional. Title for the result
   */
  title?: string | undefined;
  /**
   * Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean | undefined;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
  /**
   * Optional. Content of the message to be sent instead of the video animation
   */
  input_message_content?: TgInputMessageContent | undefined;
};
/**
 * Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultcachedsticker
 */
export type TgInlineQueryResultCachedSticker = {
  /**
   * Type of the result, must be sticker
   */
  type: "sticker";
  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;
  /**
   * A valid file identifier of the sticker
   */
  sticker_file_id: string;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
  /**
   * Optional. Content of the message to be sent instead of the sticker
   */
  input_message_content?: TgInputMessageContent | undefined;
};
/**
 * Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultcacheddocument
 */
export type TgInlineQueryResultCachedDocument = {
  /**
   * Type of the result, must be document
   */
  type: "document";
  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;
  /**
   * Title for the result
   */
  title: string;
  /**
   * A valid file identifier for the file
   */
  document_file_id: string;
  /**
   * Optional. Short description of the result
   */
  description?: string | undefined;
  /**
   * Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the document caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
  /**
   * Optional. Content of the message to be sent instead of the file
   */
  input_message_content?: TgInputMessageContent | undefined;
};
/**
 * Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultcachedvideo
 */
export type TgInlineQueryResultCachedVideo = {
  /**
   * Type of the result, must be video
   */
  type: "video";
  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;
  /**
   * A valid file identifier for the video file
   */
  video_file_id: string;
  /**
   * Title for the result
   */
  title: string;
  /**
   * Optional. Short description of the result
   */
  description?: string | undefined;
  /**
   * Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the video caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Pass True, if the caption must be shown above the message media
   */
  show_caption_above_media?: boolean | undefined;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
  /**
   * Optional. Content of the message to be sent instead of the video
   */
  input_message_content?: TgInputMessageContent | undefined;
};
/**
 * Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultcachedvoice
 */
export type TgInlineQueryResultCachedVoice = {
  /**
   * Type of the result, must be voice
   */
  type: "voice";
  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;
  /**
   * A valid file identifier for the voice message
   */
  voice_file_id: string;
  /**
   * Voice message title
   */
  title: string;
  /**
   * Optional. Caption, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
  /**
   * Optional. Content of the message to be sent instead of the voice message
   */
  input_message_content?: TgInputMessageContent | undefined;
};
/**
 * Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
 *
 * @see https://core.telegram.org/bots/api#inlinequeryresultcachedaudio
 */
export type TgInlineQueryResultCachedAudio = {
  /**
   * Type of the result, must be audio
   */
  type: "audio";
  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;
  /**
   * A valid file identifier for the audio file
   */
  audio_file_id: string;
  /**
   * Optional. Caption, 0-1024 characters after entities parsing
   */
  caption?: string | undefined;
  /**
   * Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: TgInlineKeyboardMarkup | undefined;
  /**
   * Optional. Content of the message to be sent instead of the audio
   */
  input_message_content?: TgInputMessageContent | undefined;
};
/**
 * This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 5 types:
 *
 * - InputTextMessageContent
 *
 * - InputLocationMessageContent
 *
 * - InputVenueMessageContent
 *
 * - InputContactMessageContent
 *
 * - InputInvoiceMessageContent
 *
 * @see https://core.telegram.org/bots/api#inputmessagecontent
 */
export type TgInputMessageContent =
  | TgInputTextMessageContent
  | TgInputLocationMessageContent
  | TgInputVenueMessageContent
  | TgInputContactMessageContent
  | TgInputInvoiceMessageContent;
/**
 * Represents the content of a text message to be sent as the result of an inline query.
 *
 * @see https://core.telegram.org/bots/api#inputtextmessagecontent
 */
export type TgInputTextMessageContent = {
  /**
   * Text of the message to be sent, 1-4096 characters
   */
  message_text: string;
  /**
   * Optional. Mode for parsing entities in the message text. See formatting options for more details.
   */
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2" | undefined;
  /**
   * Optional. List of special entities that appear in message text, which can be specified instead of parse_mode
   */
  entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Link preview generation options for the message
   */
  link_preview_options?: TgLinkPreviewOptions | undefined;
};
/**
 * Represents the content of a location message to be sent as the result of an inline query.
 *
 * @see https://core.telegram.org/bots/api#inputlocationmessagecontent
 */
export type TgInputLocationMessageContent = {
  /**
   * Latitude of the location in degrees
   */
  latitude: number;
  /**
   * Longitude of the location in degrees
   */
  longitude: number;
  /**
   * Optional. The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontal_accuracy?: number | undefined;
  /**
   * Optional. Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
   */
  live_period?: number | undefined;
  /**
   * Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
   */
  heading?: number | undefined;
  /**
   * Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
   */
  proximity_alert_radius?: number | undefined;
};
/**
 * Represents the content of a venue message to be sent as the result of an inline query.
 *
 * @see https://core.telegram.org/bots/api#inputvenuemessagecontent
 */
export type TgInputVenueMessageContent = {
  /**
   * Latitude of the venue in degrees
   */
  latitude: number;
  /**
   * Longitude of the venue in degrees
   */
  longitude: number;
  /**
   * Name of the venue
   */
  title: string;
  /**
   * Address of the venue
   */
  address: string;
  /**
   * Optional. Foursquare identifier of the venue, if known
   */
  foursquare_id?: string | undefined;
  /**
   * Optional. Foursquare type of the venue, if known. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)
   */
  foursquare_type?: string | undefined;
  /**
   * Optional. Google Places identifier of the venue
   */
  google_place_id?: string | undefined;
  /**
   * Optional. Google Places type of the venue. (See supported types.)
   */
  google_place_type?: string | undefined;
};
/**
 * Represents the content of a contact message to be sent as the result of an inline query.
 *
 * @see https://core.telegram.org/bots/api#inputcontactmessagecontent
 */
export type TgInputContactMessageContent = {
  /**
   * Contact's phone number
   */
  phone_number: string;
  /**
   * Contact's first name
   */
  first_name: string;
  /**
   * Optional. Contact's last name
   */
  last_name?: string | undefined;
  /**
   * Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes
   */
  vcard?: string | undefined;
};
/**
 * Represents the content of an invoice message to be sent as the result of an inline query.
 *
 * @see https://core.telegram.org/bots/api#inputinvoicemessagecontent
 */
export type TgInputInvoiceMessageContent = {
  /**
   * Product name, 1-32 characters
   */
  title: string;
  /**
   * Product description, 1-255 characters
   */
  description: string;
  /**
   * Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.
   */
  payload: string;
  /**
   * Optional. Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.
   */
  provider_token?: string | undefined;
  /**
   * Three-letter ISO 4217 currency code, see more on currencies. Pass "XTR" for payments in Telegram Stars.
   */
  currency: string;
  /**
   * Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars.
   */
  prices: TgLabeledPrice[];
  /**
   * Optional. The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars.
   */
  max_tip_amount?: number | undefined;
  /**
   * Optional. A JSON-serialized array of suggested amounts of tip in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
   */
  suggested_tip_amounts?: number[] | undefined;
  /**
   * Optional. A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider.
   */
  provider_data?: string | undefined;
  /**
   * Optional. URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.
   */
  photo_url?: string | undefined;
  /**
   * Optional. Photo size in bytes
   */
  photo_size?: number | undefined;
  /**
   * Optional. Photo width
   */
  photo_width?: number | undefined;
  /**
   * Optional. Photo height
   */
  photo_height?: number | undefined;
  /**
   * Optional. Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars.
   */
  need_name?: boolean | undefined;
  /**
   * Optional. Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars.
   */
  need_phone_number?: boolean | undefined;
  /**
   * Optional. Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars.
   */
  need_email?: boolean | undefined;
  /**
   * Optional. Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.
   */
  need_shipping_address?: boolean | undefined;
  /**
   * Optional. Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars.
   */
  send_phone_number_to_provider?: boolean | undefined;
  /**
   * Optional. Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars.
   */
  send_email_to_provider?: boolean | undefined;
  /**
   * Optional. Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.
   */
  is_flexible?: boolean | undefined;
};
/**
 * Represents a result of an inline query that was chosen by the user and sent to their chat partner.
 *
 * Note: It is necessary to enable inline feedback via @BotFather in order to receive these objects in updates.
 *
 * @see https://core.telegram.org/bots/api#choseninlineresult
 */
export type TgChosenInlineResult = {
  /**
   * The unique identifier for the result that was chosen
   */
  result_id: string;
  /**
   * The user that chose the result
   */
  from: TgUser;
  /**
   * Optional. Sender location, only for bots that require user location
   */
  location?: TgLocation | undefined;
  /**
   * Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message.
   */
  inline_message_id?: string | undefined;
  /**
   * The query that was used to obtain the result
   */
  query: string;
};
/**
 * Describes an inline message sent by a Web App on behalf of a user.
 *
 * @see https://core.telegram.org/bots/api#sentwebappmessage
 */
export type TgSentWebAppMessage = {
  /**
   * Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message.
   */
  inline_message_id?: string | undefined;
};
/**
 * Describes an inline message to be sent by a user of a Mini App.
 *
 * @see https://core.telegram.org/bots/api#preparedinlinemessage
 */
export type TgPreparedInlineMessage = {
  /**
   * Unique identifier of the prepared message
   */
  id: string;
  /**
   * Expiration date of the prepared message, in Unix time. Expired prepared messages can no longer be used
   */
  expiration_date: number;
};
/**
 * This object represents a portion of the price for goods or services.
 *
 * @see https://core.telegram.org/bots/api#labeledprice
 */
export type TgLabeledPrice = {
  /**
   * Portion label
   */
  label: string;
  /**
   * Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
   */
  amount: number;
};
/**
 * This object contains basic information about an invoice.
 *
 * @see https://core.telegram.org/bots/api#invoice
 */
export type TgInvoice = {
  /**
   * Product name
   */
  title: string;
  /**
   * Product description
   */
  description: string;
  /**
   * Unique bot deep-linking parameter that can be used to generate this invoice
   */
  start_parameter: string;
  /**
   * Three-letter ISO 4217 currency code, or "XTR" for payments in Telegram Stars
   */
  currency: string;
  /**
   * Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
   */
  total_amount: number;
};
/**
 * This object represents a shipping address.
 *
 * @see https://core.telegram.org/bots/api#shippingaddress
 */
export type TgShippingAddress = {
  /**
   * Two-letter ISO 3166-1 alpha-2 country code
   */
  country_code: string;
  /**
   * State, if applicable
   */
  state: string;
  /**
   * City
   */
  city: string;
  /**
   * First line for the address
   */
  street_line1: string;
  /**
   * Second line for the address
   */
  street_line2: string;
  /**
   * Address post code
   */
  post_code: string;
};
/**
 * This object represents information about an order.
 *
 * @see https://core.telegram.org/bots/api#orderinfo
 */
export type TgOrderInfo = {
  /**
   * Optional. User name
   */
  name?: string | undefined;
  /**
   * Optional. User's phone number
   */
  phone_number?: string | undefined;
  /**
   * Optional. User email
   */
  email?: string | undefined;
  /**
   * Optional. User shipping address
   */
  shipping_address?: TgShippingAddress | undefined;
};
/**
 * This object represents one shipping option.
 *
 * @see https://core.telegram.org/bots/api#shippingoption
 */
export type TgShippingOption = {
  /**
   * Shipping option identifier
   */
  id: string;
  /**
   * Option title
   */
  title: string;
  /**
   * List of price portions
   */
  prices: TgLabeledPrice[];
};
/**
 * This object contains basic information about a successful payment. Note that if the buyer initiates a chargeback with the relevant payment provider following this transaction, the funds may be debited from your balance. This is outside of Telegram's control.
 *
 * @see https://core.telegram.org/bots/api#successfulpayment
 */
export type TgSuccessfulPayment = {
  /**
   * Three-letter ISO 4217 currency code, or "XTR" for payments in Telegram Stars
   */
  currency: string;
  /**
   * Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
   */
  total_amount: number;
  /**
   * Bot-specified invoice payload
   */
  invoice_payload: string;
  /**
   * Optional. Expiration date of the subscription, in Unix time; for recurring payments only
   */
  subscription_expiration_date?: number | undefined;
  /**
   * Optional. True, if the payment is a recurring payment for a subscription
   */
  is_recurring?: boolean | undefined;
  /**
   * Optional. True, if the payment is the first payment for a subscription
   */
  is_first_recurring?: boolean | undefined;
  /**
   * Optional. Identifier of the shipping option chosen by the user
   */
  shipping_option_id?: string | undefined;
  /**
   * Optional. Order information provided by the user
   */
  order_info?: TgOrderInfo | undefined;
  /**
   * Telegram payment identifier
   */
  telegram_payment_charge_id: string;
  /**
   * Provider payment identifier
   */
  provider_payment_charge_id: string;
};
/**
 * This object contains basic information about a refunded payment.
 *
 * @see https://core.telegram.org/bots/api#refundedpayment
 */
export type TgRefundedPayment = {
  /**
   * Three-letter ISO 4217 currency code, or "XTR" for payments in Telegram Stars. Currently, always "XTR"
   */
  currency: "XTR";
  /**
   * Total refunded price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45, total_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
   */
  total_amount: number;
  /**
   * Bot-specified invoice payload
   */
  invoice_payload: string;
  /**
   * Telegram payment identifier
   */
  telegram_payment_charge_id: string;
  /**
   * Optional. Provider payment identifier
   */
  provider_payment_charge_id?: string | undefined;
};
/**
 * This object contains information about an incoming shipping query.
 *
 * @see https://core.telegram.org/bots/api#shippingquery
 */
export type TgShippingQuery = {
  /**
   * Unique query identifier
   */
  id: string;
  /**
   * User who sent the query
   */
  from: TgUser;
  /**
   * Bot-specified invoice payload
   */
  invoice_payload: string;
  /**
   * User specified shipping address
   */
  shipping_address: TgShippingAddress;
};
/**
 * This object contains information about an incoming pre-checkout query.
 *
 * @see https://core.telegram.org/bots/api#precheckoutquery
 */
export type TgPreCheckoutQuery = {
  /**
   * Unique query identifier
   */
  id: string;
  /**
   * User who sent the query
   */
  from: TgUser;
  /**
   * Three-letter ISO 4217 currency code, or "XTR" for payments in Telegram Stars
   */
  currency: string;
  /**
   * Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
   */
  total_amount: number;
  /**
   * Bot-specified invoice payload
   */
  invoice_payload: string;
  /**
   * Optional. Identifier of the shipping option chosen by the user
   */
  shipping_option_id?: string | undefined;
  /**
   * Optional. Order information provided by the user
   */
  order_info?: TgOrderInfo | undefined;
};
/**
 * This object contains information about a paid media purchase.
 *
 * @see https://core.telegram.org/bots/api#paidmediapurchased
 */
export type TgPaidMediaPurchased = {
  /**
   * User who purchased the media
   */
  from: TgUser;
  /**
   * Bot-specified paid media payload
   */
  paid_media_payload: string;
};
/**
 * This object describes the state of a revenue withdrawal operation. Currently, it can be one of
 *
 * - RevenueWithdrawalStatePending
 *
 * - RevenueWithdrawalStateSucceeded
 *
 * - RevenueWithdrawalStateFailed
 *
 * @see https://core.telegram.org/bots/api#revenuewithdrawalstate
 */
export type TgRevenueWithdrawalState =
  | TgRevenueWithdrawalStatePending
  | TgRevenueWithdrawalStateSucceeded
  | TgRevenueWithdrawalStateFailed;
/**
 * The withdrawal is in progress.
 *
 * @see https://core.telegram.org/bots/api#revenuewithdrawalstatepending
 */
export type TgRevenueWithdrawalStatePending = {
  /**
   * Type of the state, always "pending"
   */
  type: "pending";
};
/**
 * The withdrawal succeeded.
 *
 * @see https://core.telegram.org/bots/api#revenuewithdrawalstatesucceeded
 */
export type TgRevenueWithdrawalStateSucceeded = {
  /**
   * Type of the state, always "succeeded"
   */
  type: "succeeded";
  /**
   * Date the withdrawal was completed in Unix time
   */
  date: number;
  /**
   * An HTTPS URL that can be used to see transaction details
   */
  url: string;
};
/**
 * The withdrawal failed and the transaction was refunded.
 *
 * @see https://core.telegram.org/bots/api#revenuewithdrawalstatefailed
 */
export type TgRevenueWithdrawalStateFailed = {
  /**
   * Type of the state, always "failed"
   */
  type: "failed";
};
/**
 * Contains information about the affiliate that received a commission via this transaction.
 *
 * @see https://core.telegram.org/bots/api#affiliateinfo
 */
export type TgAffiliateInfo = {
  /**
   * Optional. The bot or the user that received an affiliate commission if it was received by a bot or a user
   */
  affiliate_user?: TgUser | undefined;
  /**
   * Optional. The chat that received an affiliate commission if it was received by a chat
   */
  affiliate_chat?: TgChat | undefined;
  /**
   * The number of Telegram Stars received by the affiliate for each 1000 Telegram Stars received by the bot from referred users
   */
  commission_per_mille: number;
  /**
   * Integer amount of Telegram Stars received by the affiliate from the transaction, rounded to 0; can be negative for refunds
   */
  amount: number;
  /**
   * Optional. The number of 1/1000000000 shares of Telegram Stars received by the affiliate; from -999999999 to 999999999; can be negative for refunds
   */
  nanostar_amount?: number | undefined;
};
/**
 * This object describes the source of a transaction, or its recipient for outgoing transactions. Currently, it can be one of
 *
 * - TransactionPartnerUser
 *
 * - TransactionPartnerChat
 *
 * - TransactionPartnerAffiliateProgram
 *
 * - TransactionPartnerFragment
 *
 * - TransactionPartnerTelegramAds
 *
 * - TransactionPartnerTelegramApi
 *
 * - TransactionPartnerOther
 *
 * @see https://core.telegram.org/bots/api#transactionpartner
 */
export type TgTransactionPartner =
  | TgTransactionPartnerUser
  | TgTransactionPartnerChat
  | TgTransactionPartnerAffiliateProgram
  | TgTransactionPartnerFragment
  | TgTransactionPartnerTelegramAds
  | TgTransactionPartnerTelegramApi
  | TgTransactionPartnerOther;
/**
 * Describes a transaction with a user.
 *
 * @see https://core.telegram.org/bots/api#transactionpartneruser
 */
export type TgTransactionPartnerUser = {
  /**
   * Type of the transaction partner, always "user"
   */
  type: "user";
  /**
   * Type of the transaction, currently one of "invoice_payment" for payments via invoices, "paid_media_payment" for payments for paid media, "gift_purchase" for gifts sent by the bot, "premium_purchase" for Telegram Premium subscriptions gifted by the bot, "business_account_transfer" for direct transfers from managed business accounts
   */
  transaction_type:
    | "invoice_payment"
    | "paid_media_payment"
    | "gift_purchase"
    | "premium_purchase"
    | "business_account_transfer";
  /**
   * Information about the user
   */
  user: TgUser;
  /**
   * Optional. Information about the affiliate that received a commission via this transaction. Can be available only for "invoice_payment" and "paid_media_payment" transactions.
   */
  affiliate?: TgAffiliateInfo | undefined;
  /**
   * Optional. Bot-specified invoice payload. Can be available only for "invoice_payment" transactions.
   */
  invoice_payload?: string | undefined;
  /**
   * Optional. The duration of the paid subscription. Can be available only for "invoice_payment" transactions.
   */
  subscription_period?: number | undefined;
  /**
   * Optional. Information about the paid media bought by the user; for "paid_media_payment" transactions only
   */
  paid_media?: TgPaidMedia[] | undefined;
  /**
   * Optional. Bot-specified paid media payload. Can be available only for "paid_media_payment" transactions.
   */
  paid_media_payload?: string | undefined;
  /**
   * Optional. The gift sent to the user by the bot; for "gift_purchase" transactions only
   */
  gift?: TgGift | undefined;
  /**
   * Optional. Number of months the gifted Telegram Premium subscription will be active for; for "premium_purchase" transactions only
   */
  premium_subscription_duration?: number | undefined;
};
/**
 * Describes a transaction with a chat.
 *
 * @see https://core.telegram.org/bots/api#transactionpartnerchat
 */
export type TgTransactionPartnerChat = {
  /**
   * Type of the transaction partner, always "chat"
   */
  type: "chat";
  /**
   * Information about the chat
   */
  chat: TgChat;
  /**
   * Optional. The gift sent to the chat by the bot
   */
  gift?: TgGift | undefined;
};
/**
 * Describes the affiliate program that issued the affiliate commission received via this transaction.
 *
 * @see https://core.telegram.org/bots/api#transactionpartneraffiliateprogram
 */
export type TgTransactionPartnerAffiliateProgram = {
  /**
   * Type of the transaction partner, always "affiliate_program"
   */
  type: "affiliate_program";
  /**
   * Optional. Information about the bot that sponsored the affiliate program
   */
  sponsor_user?: TgUser | undefined;
  /**
   * The number of Telegram Stars received by the bot for each 1000 Telegram Stars received by the affiliate program sponsor from referred users
   */
  commission_per_mille: number;
};
/**
 * Describes a withdrawal transaction with Fragment.
 *
 * @see https://core.telegram.org/bots/api#transactionpartnerfragment
 */
export type TgTransactionPartnerFragment = {
  /**
   * Type of the transaction partner, always "fragment"
   */
  type: "fragment";
  /**
   * Optional. State of the transaction if the transaction is outgoing
   */
  withdrawal_state?: TgRevenueWithdrawalState | undefined;
};
/**
 * Describes a withdrawal transaction to the Telegram Ads platform.
 *
 * @see https://core.telegram.org/bots/api#transactionpartnertelegramads
 */
export type TgTransactionPartnerTelegramAds = {
  /**
   * Type of the transaction partner, always "telegram_ads"
   */
  type: "telegram_ads";
};
/**
 * Describes a transaction with payment for paid broadcasting.
 *
 * @see https://core.telegram.org/bots/api#transactionpartnertelegramapi
 */
export type TgTransactionPartnerTelegramApi = {
  /**
   * Type of the transaction partner, always "telegram_api"
   */
  type: "telegram_api";
  /**
   * The number of successful requests that exceeded regular limits and were therefore billed
   */
  request_count: number;
};
/**
 * Describes a transaction with an unknown source or recipient.
 *
 * @see https://core.telegram.org/bots/api#transactionpartnerother
 */
export type TgTransactionPartnerOther = {
  /**
   * Type of the transaction partner, always "other"
   */
  type: "other";
};
/**
 * Describes a Telegram Star transaction. Note that if the buyer initiates a chargeback with the payment provider from whom they acquired Stars (e.g., Apple, Google) following this transaction, the refunded Stars will be deducted from the bot's balance. This is outside of Telegram's control.
 *
 * @see https://core.telegram.org/bots/api#startransaction
 */
export type TgStarTransaction = {
  /**
   * Unique identifier of the transaction. Coincides with the identifier of the original transaction for refund transactions. Coincides with SuccessfulPayment.telegram_payment_charge_id for successful incoming payments from users.
   */
  id: string;
  /**
   * Integer amount of Telegram Stars transferred by the transaction
   */
  amount: number;
  /**
   * Optional. The number of 1/1000000000 shares of Telegram Stars transferred by the transaction; from 0 to 999999999
   */
  nanostar_amount?: number | undefined;
  /**
   * Date the transaction was created in Unix time
   */
  date: number;
  /**
   * Optional. Source of an incoming transaction (e.g., a user purchasing goods or services, Fragment refunding a failed withdrawal). Only for incoming transactions
   */
  source?: TgTransactionPartner | undefined;
  /**
   * Optional. Receiver of an outgoing transaction (e.g., a user for a purchase refund, Fragment for a withdrawal). Only for outgoing transactions
   */
  receiver?: TgTransactionPartner | undefined;
};
/**
 * Contains a list of Telegram Star transactions.
 *
 * @see https://core.telegram.org/bots/api#startransactions
 */
export type TgStarTransactions = {
  /**
   * The list of transactions
   */
  transactions: TgStarTransaction[];
};
/**
 * Describes Telegram Passport data shared with the bot by the user.
 *
 * @see https://core.telegram.org/bots/api#passportdata
 */
export type TgPassportData = {
  /**
   * Array with information about documents and other Telegram Passport elements that was shared with the bot
   */
  data: TgEncryptedPassportElement[];
  /**
   * Encrypted credentials required to decrypt the data
   */
  credentials: TgEncryptedCredentials;
};
/**
 * This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.
 *
 * @see https://core.telegram.org/bots/api#passportfile
 */
export type TgPassportFile = {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;
  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;
  /**
   * File size in bytes
   */
  file_size: number;
  /**
   * Unix time when the file was uploaded
   */
  file_date: number;
};
/**
 * Describes documents or other Telegram Passport elements shared with the bot by the user.
 *
 * @see https://core.telegram.org/bots/api#encryptedpassportelement
 */
export type TgEncryptedPassportElement = {
  /**
   * Element type. One of "personal_details", "passport", "driver_license", "identity_card", "internal_passport", "address", "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration", "phone_number", "email".
   */
  type:
    | "personal_details"
    | "passport"
    | "driver_license"
    | "identity_card"
    | "internal_passport"
    | "address"
    | "utility_bill"
    | "bank_statement"
    | "rental_agreement"
    | "passport_registration"
    | "temporary_registration"
    | "phone_number"
    | "email";
  /**
   * Optional. Base64-encoded encrypted Telegram Passport element data provided by the user; available only for "personal_details", "passport", "driver_license", "identity_card", "internal_passport" and "address" types. Can be decrypted and verified using the accompanying EncryptedCredentials.
   */
  data?: string | undefined;
  /**
   * Optional. User's verified phone number; available only for "phone_number" type
   */
  phone_number?: string | undefined;
  /**
   * Optional. User's verified email address; available only for "email" type
   */
  email?: string | undefined;
  /**
   * Optional. Array of encrypted files with documents provided by the user; available only for "utility_bill", "bank_statement", "rental_agreement", "passport_registration" and "temporary_registration" types. Files can be decrypted and verified using the accompanying EncryptedCredentials.
   */
  files?: TgPassportFile[] | undefined;
  /**
   * Optional. Encrypted file with the front side of the document, provided by the user; available only for "passport", "driver_license", "identity_card" and "internal_passport". The file can be decrypted and verified using the accompanying EncryptedCredentials.
   */
  front_side?: TgPassportFile | undefined;
  /**
   * Optional. Encrypted file with the reverse side of the document, provided by the user; available only for "driver_license" and "identity_card". The file can be decrypted and verified using the accompanying EncryptedCredentials.
   */
  reverse_side?: TgPassportFile | undefined;
  /**
   * Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available if requested for "passport", "driver_license", "identity_card" and "internal_passport". The file can be decrypted and verified using the accompanying EncryptedCredentials.
   */
  selfie?: TgPassportFile | undefined;
  /**
   * Optional. Array of encrypted files with translated versions of documents provided by the user; available if requested for "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement", "rental_agreement", "passport_registration" and "temporary_registration" types. Files can be decrypted and verified using the accompanying EncryptedCredentials.
   */
  translation?: TgPassportFile[] | undefined;
  /**
   * Base64-encoded element hash for using in PassportElementErrorUnspecified
   */
  hash: string;
};
/**
 * Describes data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes.
 *
 * @see https://core.telegram.org/bots/api#encryptedcredentials
 */
export type TgEncryptedCredentials = {
  /**
   * Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication
   */
  data: string;
  /**
   * Base64-encoded data hash for data authentication
   */
  hash: string;
  /**
   * Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption
   */
  secret: string;
};
/**
 * This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:
 *
 * - PassportElementErrorDataField
 *
 * - PassportElementErrorFrontSide
 *
 * - PassportElementErrorReverseSide
 *
 * - PassportElementErrorSelfie
 *
 * - PassportElementErrorFile
 *
 * - PassportElementErrorFiles
 *
 * - PassportElementErrorTranslationFile
 *
 * - PassportElementErrorTranslationFiles
 *
 * - PassportElementErrorUnspecified
 *
 * @see https://core.telegram.org/bots/api#passportelementerror
 */
export type TgPassportElementError =
  | TgPassportElementErrorDataField
  | TgPassportElementErrorFrontSide
  | TgPassportElementErrorReverseSide
  | TgPassportElementErrorSelfie
  | TgPassportElementErrorFile
  | TgPassportElementErrorFiles
  | TgPassportElementErrorTranslationFile
  | TgPassportElementErrorTranslationFiles
  | TgPassportElementErrorUnspecified;
/**
 * Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.
 *
 * @see https://core.telegram.org/bots/api#passportelementerrordatafield
 */
export type TgPassportElementErrorDataField = {
  /**
   * Error source, must be data
   */
  source: "data";
  /**
   * The section of the user's Telegram Passport which has the error, one of "personal_details", "passport", "driver_license", "identity_card", "internal_passport", "address"
   */
  type:
    | "personal_details"
    | "passport"
    | "driver_license"
    | "identity_card"
    | "internal_passport"
    | "address";
  /**
   * Name of the data field which has the error
   */
  field_name: string;
  /**
   * Base64-encoded data hash
   */
  data_hash: string;
  /**
   * Error message
   */
  message: string;
};
/**
 * Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.
 *
 * @see https://core.telegram.org/bots/api#passportelementerrorfrontside
 */
export type TgPassportElementErrorFrontSide = {
  /**
   * Error source, must be front_side
   */
  source: "front_side";
  /**
   * The section of the user's Telegram Passport which has the issue, one of "passport", "driver_license", "identity_card", "internal_passport"
   */
  type: "passport" | "driver_license" | "identity_card" | "internal_passport";
  /**
   * Base64-encoded hash of the file with the front side of the document
   */
  file_hash: string;
  /**
   * Error message
   */
  message: string;
};
/**
 * Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.
 *
 * @see https://core.telegram.org/bots/api#passportelementerrorreverseside
 */
export type TgPassportElementErrorReverseSide = {
  /**
   * Error source, must be reverse_side
   */
  source: "reverse_side";
  /**
   * The section of the user's Telegram Passport which has the issue, one of "driver_license", "identity_card"
   */
  type: "driver_license" | "identity_card";
  /**
   * Base64-encoded hash of the file with the reverse side of the document
   */
  file_hash: string;
  /**
   * Error message
   */
  message: string;
};
/**
 * Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.
 *
 * @see https://core.telegram.org/bots/api#passportelementerrorselfie
 */
export type TgPassportElementErrorSelfie = {
  /**
   * Error source, must be selfie
   */
  source: "selfie";
  /**
   * The section of the user's Telegram Passport which has the issue, one of "passport", "driver_license", "identity_card", "internal_passport"
   */
  type: "passport" | "driver_license" | "identity_card" | "internal_passport";
  /**
   * Base64-encoded hash of the file with the selfie
   */
  file_hash: string;
  /**
   * Error message
   */
  message: string;
};
/**
 * Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.
 *
 * @see https://core.telegram.org/bots/api#passportelementerrorfile
 */
export type TgPassportElementErrorFile = {
  /**
   * Error source, must be file
   */
  source: "file";
  /**
   * The section of the user's Telegram Passport which has the issue, one of "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration"
   */
  type:
    | "utility_bill"
    | "bank_statement"
    | "rental_agreement"
    | "passport_registration"
    | "temporary_registration";
  /**
   * Base64-encoded file hash
   */
  file_hash: string;
  /**
   * Error message
   */
  message: string;
};
/**
 * Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.
 *
 * @see https://core.telegram.org/bots/api#passportelementerrorfiles
 */
export type TgPassportElementErrorFiles = {
  /**
   * Error source, must be files
   */
  source: "files";
  /**
   * The section of the user's Telegram Passport which has the issue, one of "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration"
   */
  type:
    | "utility_bill"
    | "bank_statement"
    | "rental_agreement"
    | "passport_registration"
    | "temporary_registration";
  /**
   * List of base64-encoded file hashes
   */
  file_hashes: string[];
  /**
   * Error message
   */
  message: string;
};
/**
 * Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.
 *
 * @see https://core.telegram.org/bots/api#passportelementerrortranslationfile
 */
export type TgPassportElementErrorTranslationFile = {
  /**
   * Error source, must be translation_file
   */
  source: "translation_file";
  /**
   * Type of element of the user's Telegram Passport which has the issue, one of "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration"
   */
  type:
    | "passport"
    | "driver_license"
    | "identity_card"
    | "internal_passport"
    | "utility_bill"
    | "bank_statement"
    | "rental_agreement"
    | "passport_registration"
    | "temporary_registration";
  /**
   * Base64-encoded file hash
   */
  file_hash: string;
  /**
   * Error message
   */
  message: string;
};
/**
 * Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.
 *
 * @see https://core.telegram.org/bots/api#passportelementerrortranslationfiles
 */
export type TgPassportElementErrorTranslationFiles = {
  /**
   * Error source, must be translation_files
   */
  source: "translation_files";
  /**
   * Type of element of the user's Telegram Passport which has the issue, one of "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration"
   */
  type:
    | "passport"
    | "driver_license"
    | "identity_card"
    | "internal_passport"
    | "utility_bill"
    | "bank_statement"
    | "rental_agreement"
    | "passport_registration"
    | "temporary_registration";
  /**
   * List of base64-encoded file hashes
   */
  file_hashes: string[];
  /**
   * Error message
   */
  message: string;
};
/**
 * Represents an issue in an unspecified place. The error is considered resolved when new data is added.
 *
 * @see https://core.telegram.org/bots/api#passportelementerrorunspecified
 */
export type TgPassportElementErrorUnspecified = {
  /**
   * Error source, must be unspecified
   */
  source: "unspecified";
  /**
   * Type of element of the user's Telegram Passport which has the issue
   */
  type: string;
  /**
   * Base64-encoded element hash
   */
  element_hash: string;
  /**
   * Error message
   */
  message: string;
};
/**
 * This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
 *
 * @see https://core.telegram.org/bots/api#game
 */
export type TgGame = {
  /**
   * Title of the game
   */
  title: string;
  /**
   * Description of the game
   */
  description: string;
  /**
   * Photo that will be displayed in the game message in chats.
   */
  photo: TgPhotoSize[];
  /**
   * Optional. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters.
   */
  text?: string | undefined;
  /**
   * Optional. Special entities that appear in text, such as usernames, URLs, bot commands, etc.
   */
  text_entities?: TgMessageEntity[] | undefined;
  /**
   * Optional. Animation that will be displayed in the game message in chats. Upload via BotFather
   */
  animation?: TgAnimation | undefined;
};
/**
 * A placeholder, currently holds no information. Use BotFather to set up your game.
 *
 * @see https://core.telegram.org/bots/api#callbackgame
 */
export type TgCallbackGame = {};
/**
 * This object represents one row of the high scores table for a game.
 *
 * @see https://core.telegram.org/bots/api#gamehighscore
 */
export type TgGameHighScore = {
  /**
   * Position in high score table for the game
   */
  position: number;
  /**
   * User
   */
  user: TgUser;
  /**
   * Score
   */
  score: number;
};
