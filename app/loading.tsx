export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='loader'>
      <div className='metronome'>
        <div className='metronome__dot'></div>
        <div className='metronome__dot'></div>
        <div className='metronome__dot'></div>
        <div className='metronome__dot'></div>
      </div>
    </div>
  );
}
