import consumer from "./consumer"

document.addEventListener('turbolinks:load', () => {

  const element = document.getElementById("room_id")
  const room_id = element.getAttribute('data-room-id')

  console.log(room_id)

  consumer.subscriptions.create({ channel: "RoomChannel", room_id: room_id}, {
    connected() {
      // Called when the subscription is ready for use on the server
      console.log("connected to " + room_id)
    },

    disconnected() {
      // Called when the subscription has been terminated by the server
    },

    received(data) {
      // Called when there's incoming data on the websocket for this channel
      console.log(data)
    }
  });

})
