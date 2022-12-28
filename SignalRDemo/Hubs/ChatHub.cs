using Microsoft.AspNetCore.SignalR;

namespace SignalRDemo
{
    public class ChatHub:Hub
    {
        public async Task SendMessage(string fromuser,string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", fromuser, message);
        }
    }
}
