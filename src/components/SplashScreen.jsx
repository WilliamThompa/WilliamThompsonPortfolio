import React from 'react'

function SplashScreen() {
    let intro = intro

  return (
    <div name="intro" className='fixed z-10 p-0 w-full h-screen bg-slate-900 duration-1000'>
        <h1 className='h-screen flex items-center justify-center'>
            <span className='text-7xl font-logo ml-2 relative inline-block mb-[-20px] text-opacity-0'>Tho</span>
            <span className='text-7xl font-logo ml-2 relative inline-block mb-[-20px] text-opacity-0'>mpa</span>
        </h1>
    </div>
  )
}

export default function SplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            try {
                // Put here your await requests/ API requests
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 1000)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            // while checking user session, show "loading" message
            if (this.state.loading) return SplashMessage();

            // otherwise, show the desired route
            return <WrappedComponent {...this.props} />;
        }
    };
}