import Loader from "@/components/Loader";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Text, View } from "react-native";

export default function Notifications(){
const notifications = useQuery(api.notifications.getNotifications);

if(Notifications === undefined) return <Loader/>
if(notifications?.length === 0) return <NoNotificationsFound/>

  return(
    <View>
      <Text>Notifications</Text>
    </View>
  )
}

func