const handler = async (req, res) => {
  let revalidated = false;
  try {
    await res.unstable_revalidate('/');
    revalidated = true;
  } catch (err) {
    console.error(err);
  }
  res.json({
    revalidated,
  });
};

export default handler;
