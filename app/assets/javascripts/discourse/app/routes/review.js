import I18n from "I18n";
import DiscourseRoute from "discourse/routes/discourse";

export default DiscourseRoute.extend({
  titleToken() {
    return I18n.t("review.title");
  },
});
