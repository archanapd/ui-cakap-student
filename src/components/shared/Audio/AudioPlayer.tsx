import ReactAudioPlayer from 'react-audio-player';

const Player = ({ url }: { url: string }) => {


  return (

  <ReactAudioPlayer
    src={url}
    autoPlay
    controls
  />
  );
};

export default Player;
