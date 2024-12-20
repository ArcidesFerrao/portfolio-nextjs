import React from "react";

export default function MusicPage() {
  return (
    <div className="music-container">
      <div>
        <iframe
          width="100%"
          height="400"
          //   scrolling="no"
          //   frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1100793289&color=%233c6c7c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <div
        // style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"
        >
          <a
            href="https://soundcloud.com/arcidesferrao"
            title="Nothing Personal"
            target="_blank"
            // style="color: #cccccc; text-decoration: none;"
          >
            Nothing Personal
          </a>{" "}
          ·{" "}
          <a
            href="https://soundcloud.com/arcidesferrao/pacifico"
            title="Pacífico"
            target="_blank"
            // style="color: #cccccc; text-decoration: none;"
          >
            Pacífico
          </a>
        </div>
      </div>
    </div>
  );
}
