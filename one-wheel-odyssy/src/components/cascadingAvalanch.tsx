const CascadingAvalanch = () => {
  return (
    <>
      <div className="absolute w-[400px] overflow-hidden wrapper flex justify-center  ">
        {[...Array(3)].map((_, i) => (
          <div
            style={{
              animationDelay: `calc(10s / 3 * (${3 - i} - 1) * -1)`,
            }}
            className="item border-2 border-red-600"
            key={i}
          >
            <img
              src="/testimonials/1.jpg"
              alt="Hero Image"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute w-[400px] overflow-hidden wrapper  flex justify-center ">
        {[...Array(3)].map((_, i) => (
          <div
            style={{
              animationDelay: `calc(10s / 3 * (${3 - i} - 1) * -1)`,
            }}
            className="reverse-item border-2 border-red-600"
            key={i}
          >
            <img
              src="/testimonials/1.jpg"
              alt="Hero Image"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>{" "}
      <style>{`
      
.wrapper {
     height: 90%;
    max-height: 700px;
    margin-inline: auto;
    position: relative;
    overflow: hidden;
  mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0)
  );
}
  
.test {
  background-color: green;

}



@keyframes scrollUp {
  to {
    top: -350px;
  }
  }
  @keyframes scrollDown {
      to {
        bottom: -350px;
      }
    }
.reverse-item {
width: 250px;
  height: 400px;
  border-radius: 6px;
  background-color: red;
  position: absolute;
  top: max(calc(400px * 3), 100%);
  animation-name: scrollUp;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
  .item {
  width: 250px;
  height: 400px;
  border-radius: 6px;
  background-color: red;
  position: absolute;
  Bottom: max(calc(400px * 3), 100%);
  animation-name: scrollDown;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
} 

.item1 {
  animation-delay: calc(30s / 8 * (8 - 1) * -1);
}

.item2 {
  animation-delay: calc(30s / 8 * (8 - 2) * -1);
}

.item3 {
  animation-delay: calc(30s / 8 * (8 - 3) * -1);
}

.item4 {
  animation-delay: calc(30s / 8 * (8 - 4) * -1);
}

.item5 {
  animation-delay: calc(30s / 8 * (8 - 5) * -1);
}

.item6 {
  animation-delay: calc(30s / 8 * (8 - 6) * -1);
}

.item7 {
  animation-delay: calc(30s / 8 * (8 - 7) * -1);
}

.item8 {
  animation-delay: calc(30s / 8 * (8 - 8) * -1);
}
        
      `}</style>
    </>
  );
};

export default CascadingAvalanch;
