export const extractLoanAdvice = (text) => {
    const defaultAdvice = [];
    const nonDefaultAdvice = [];
  
    // Match the default and non-default sections
    const defaultSection = text.match(/### \*\*If Predicted as Default:\*\*([\s\S]*?)### \*\*If Not Default:\*\*/);
    const nonDefaultSection = text.match(/### \*\*If Not Default:\*\*([\s\S]*)/);
  
    if (defaultSection) {
      // Extract points under "If Predicted as Default"
      const points = defaultSection[1].match(/\d+\.\s\*\*(.*?)\*\*\s–\s(.*?)(?=\n\d+\.|\n*$)/g);
      if (points) {
        points.forEach((point) => {
          const [_, title, description] = point.match(/\d+\.\s\*\*(.*?)\*\*\s–\s(.*)/) || [];
          if (title && description) {
            defaultAdvice.push(`${title} – ${description}`);
          }
        });
      }
    }
  
    if (nonDefaultSection) {
      // Extract points under "If Not Default"
      const points = nonDefaultSection[1].match(/\d+\.\s\*\*(.*?)\*\*\s–\s(.*?)(?=\n\d+\.|\n*$)/g);
      if (points) {
        points.forEach((point) => {
          const [_, title, description] = point.match(/\d+\.\s\*\*(.*?)\*\*\s–\s(.*)/) || [];
          if (title && description) {
            nonDefaultAdvice.push(`${title} – ${description}`);
          }
        });
      }
    }
  
    return { defaultAdvice, nonDefaultAdvice };
  };
  

  export const loadTextGradually = (text, setText, interval = 50) => {
    let index = 0;
    const words = text.split(" ");
  
    const intervalId = setInterval(() => {
      if (index < words.length) {
        setText(prev => (prev ? prev + " " : "") + words[index]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, interval);
  
    return () => clearInterval(intervalId); // Cleanup function
  };
  