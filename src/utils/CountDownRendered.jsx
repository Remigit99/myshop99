import Countdown from "react-countdown"

const CountDownRendered = ({ days, hours, minutes, seconds, completed }) => {

  if (completed) {
    // Render a completed state
    return <span>Flash Sale has ended!</span>;
  } else {

    return (
      <div className='flex flex-start items-center gap-4 mt-4 text-center w-max px-4'>
        <div>
          <p className=''>Days</p>
          <h1 className='text-3xl font-bold'>{String(days).padStart(2, "0")}</h1>
        </div>

        <div className='font-semibold text-3xl mt-6'>:</div>

        <div>
          <p>Hours</p>
          <h1 className='text-3xl font-bold'>{String(hours).padStart(2, "0")}</h1>
        </div>

        <div className='font-semibold text-3xl mt-6'>:</div>


        <div>
          <p>Minutes</p>
          <h1 className='text-3xl font-bold'>{String(minutes).padStart(2, "0")}</h1>
        </div>

        <div className='font-semibold text-3xl mt-6'>:</div>


        <div>
          <p>Seconds</p>
          <h1 className='text-3xl font-bold'>{String(seconds).padStart(2, "0")}</h1>
        </div>


      </div>
    )
  }
}

export default CountDownRendered;