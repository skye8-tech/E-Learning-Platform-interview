interface EnrollButtonProps {
  courseId: string;
  isEnrolled: boolean;
  onEnrollSuccess: () => void;
}

const EnrollButton = ({ courseId, isEnrolled, onEnrollSuccess }: EnrollButtonProps) => {
  const handleEnroll = async () => {
    try {
      // TODO: Replace with actual API call
      console.log(`Enrolling in course ${courseId}`);
      onEnrollSuccess();
    } catch (error) {
      console.error("Failed to enroll", error);
    }
  };

  return (
    <button
      onClick={handleEnroll}
      disabled={isEnrolled}
      className={`w-full rounded-lg px-4 py-2 font-semibold transition-colors ${
        isEnrolled
          ? "bg-green-100 text-green-800 cursor-default"
          : "bg-primary text-primary-foreground hover:bg-primary/90"
      }`}
    >
      {isEnrolled ? "✓ Enrolled" : "Enroll Now"}
    </button>
  );
};

export default EnrollButton;
