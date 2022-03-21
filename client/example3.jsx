class SongContainer extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            songs: props.songs,
        };

        this.loadSongsromServer();
    }

    loadSongsromServer = async () =>
    {
        const response = await fetch('/getSongs');
        const songs = await response.json();
        this.setState({songs});
    }

    render()
    {
        if(this.state.songs.length === 0)
        {
            return(
                <div>
                    <h1>No Songs Yet!</h1>
                </div>
            );
        }

        //We have songs
        const songList = this.state.songs.map((song) =>
        {
            //Returns from map not render
            return(
                <div key={song.title}>
                    <h2>{song.artist} - <i>{song.title}</i></h2>
                </div>
            );
        });

        return(
            <div>
                <h1>My Favorte Songs!</h1>
                {songList}
            </div>
        )
    }
}

const init = () => 
{
    ReactDOM.render(<SongContainer songs={[]} />, document.getElementById('app'));
};
  
window.onload = init;