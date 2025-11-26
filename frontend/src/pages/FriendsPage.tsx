import React from 'react';
import PageTransition from '../components/PageTransition';

const FriendsPage: React.FC = () => {
    const friends = [
        { name: "Miri Ben-Ari", url: "http://www.miribenari.com/" },
        { name: "Mark Wood", url: "http://www.markwoodmusic.com/" },
        { name: "John Blake", url: "http://www.johnblakejr.com" },
        { name: "Jeff Gauthier", url: "http://www.ninewinds.com/Artists/gauthier.html" },
        { name: "David Miller - Asleep At The Wheel", url: "http://www.asleepatthewheel.com/" },
        { name: "Rob Wasserman", url: "http://www.robwasserman.com/" },
        { name: "Matt Glasser", url: "http://www.berklee.edu/faculty/detail.php?id=155&type=last_name&value=glaser&sk=0" },
        { name: "Tracy Silverman", url: "http://www.tracysilverman.com/" },
        { name: "Nigel Kennedy", url: "http://www.nigelkennedy.com/" },
        { name: "Caryn Lin", url: "http://www.carynlin.com/b2rhome.html" },
        { name: "Matt Maneri", url: "http://en.wikipedia.org/wiki/Mat_Maneri" },
        { name: "Cathy Morris", url: "http://www.cathymorris.com/home.htm" },
        { name: "Jim Nolet", url: "http://members.w-link.net/~atempleton/brazil/Cathexis/jimnolet.htm" },
        { name: "David Ragsdale", url: "http://www.davidragsdale.com/main.html" },
        { name: "Ritsu Katsumata", url: "http://www.ritsu.com/" },
        { name: "Willie Royal", url: "http://willieandlobo.com/" },
        { name: "John Shussler", url: "http://www.lightbubble.com/bowed/schusslr.htm" },
        { name: "Michael Urbaniak", url: "http://www.urbaniak.com" },
        { name: "Geoffrey Castle", url: "http://www.GeoffreyCastle.com" },
        { name: "Kala Ramnath", url: "http://www.kalaramnath.com/" },
        { name: "Boyd Tinsley", url: "http://www.dmband.com/" },
        { name: "Dan Trueman", url: "http://www.music.princeton.edu/~dan/rtv/" },
        { name: "Will Taylor", url: "http://www.musicaustin.com/jazz/wtaylor.html" },
        { name: "Rudolf Haken", url: "http://www.youtube.com/watch?v=03q3ytBru-I" },
        { name: "Joe Deninzon", url: "http://www.joedeninzon.com/Joedeninzonwebresume.html" },
        { name: "Miriam Rabson", url: "http://www.klezmershack.com/bands/kcb/live13/kcb.live13.html" }
    ];

    return (
        <PageTransition>
            <div className="py-16 bg-background min-h-screen">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 text-center">Friends & Users</h1>

                    <div className="bg-white p-8 md:p-12 rounded-xl shadow-md">
                        <p className="text-lg text-gray-700 mb-8 text-center">
                            We are proud to have our pickups used by these amazing artists.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {friends.map((friend, index) => (
                                <a
                                    key={index}
                                    href={friend.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center group"
                                >
                                    <span className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                                    <span className="text-lg font-medium text-gray-800 group-hover:text-primary transition-colors">
                                        {friend.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default FriendsPage;
