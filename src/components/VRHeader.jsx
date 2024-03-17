const VRHeader = ({ tourLink }) => {
  return (
    <>
      <iframe class="h-full w-full min-h-[400px]  " src={tourLink}>
        VR HEader
      </iframe>
    </>
  );
};

export default VRHeader;
