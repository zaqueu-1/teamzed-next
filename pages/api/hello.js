async function time(req, res) {
  const dynamicDate = new Date();  

  res.SetHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  res.JSON({
    date: dynamicDate.toGMTString()
  });
}

export default time;