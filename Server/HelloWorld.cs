using System;
using System.Threading;
using DotNetify;

namespace HelloWorld
{
    public class HelloWorld : BaseVM
    {
        private Timer _timer;
        public string Greetings  { 
            get => Get<string>();
            set {
                Set(value);
                Changed(nameof(Greetings));
                PushUpdates();
            } 
        }

        public DateTime ServerTime => DateTime.Now;

        public HelloWorld()
        {
            _timer = new Timer(state =>
            {
                Changed(nameof(ServerTime));
                PushUpdates();
            }, null, 0, 1000);
            Greetings = "Hello world";
        }
        public override void Dispose() => _timer.Dispose();
    }
}