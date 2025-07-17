 const handleCheckout = async (referral?:unknown) => {
    const res = await fetch('/api/create-checkout-session',{
        method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ referral }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Something went wrong!');
    }
  };



  export default handleCheckout;