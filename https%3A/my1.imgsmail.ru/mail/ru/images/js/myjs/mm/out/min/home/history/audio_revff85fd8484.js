define(["jquery","audio-player","util/find-event-target"],function(a,b,c){"use strict";var d="audio:Playlist";return{isAudioEvent:function(c){var d=b.getPlayer().getTrack(),e=null,f=!1;return null!==d&&(e=d.getPlaylist().getId()),a(c).find(".js-jp_player_active").data("historyEventContainer")===e&&(f=!0),f},onBrowserEvent:function(e){var f,g;"click"===e.type&&(f=c(e,"[data-type]"),f&&f.data("type")===d&&!f.hasClass("js-jp_player_active")&&(e.preventDefault(),g=b.createPlaylist({id:a(f).data("historyEventContainer"),element:a(f),activeEmail:a(f).data("activeEmail"),noLink:a(f).data("noLink")}),g.createTracks(),a(e.target).click()))},bind:function(c){c.find('[data-type="'+d+'"]').each(function(){var c,d=a(this),e=d.data("historyEventContainer");d.closest(".b-comments__item").length&&(e="comment-"+d.closest(".b-comments__item").data("commentId")),c=b.createPlaylist({id:d.data("historyEventContainer"),from:e,element:d,fragment:"history",eventType:d.data("eventType"),activeEmail:d.data("activeEmail"),noLink:d.data("noLink")}),c.createTracks()})}}});