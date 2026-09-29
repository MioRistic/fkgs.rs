// app/head.js
export default function Head() {
  return (
    <>
      <meta name="google-site-verification" content="SEUqHyOo1iZdcIUxaWDgdv7n2dd88hWMaaQipMpoDEM" />

      <script
        dangerouslySetInnerHTML={{
          __html: `(function (w,d) {
            var loader = function () {
              var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];
              s.src="https://cdn.iubenda.com/iubenda.js"; 
              tag.parentNode.insertBefore(s,tag);
            }; 
            if(w.addEventListener){w.addEventListener("load", loader, false);}
            else if(w.attachEvent){w.attachEvent("onload", loader);}
            else{w.onload = loader;}
          })(window, document);`,
        }}
      />
    </>
  );
}