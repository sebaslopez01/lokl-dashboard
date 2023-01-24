import { Text, View, Pressable, ScrollView } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function Investments() {
  return (
    <View className="flex-1 p-5 bg-[#f2f2f2]">
      <Text className="text-black font-bold text-2xl">Mis Inversiones</Text>
      <ScrollView className="mt-4 space-y-4">
        <View className="p-4 bg-white rounded-md">
          <View className="flex flex-col space-y-2 items-start">
            <Text className="px-6 py-1 bg-[#EAC8FF] rounded-lg text-black text-xs">
              Exitoso
            </Text>
            <View className="flex flex-row items-center">
              <Text className="text-3xl font-bold">Indie Universe</Text>
              <Svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-4"
              >
                <Path
                  d="M5.5499 0.89373C5.85111 -0.0236742 7.14889 -0.023675 7.4501 0.893729L8.28067 3.4234C8.41546 3.83393 8.79868 4.11146 9.23077 4.11146H11.8962C12.8674 4.11146 13.2685 5.35639 12.4799 5.92338L10.3416 7.46082C9.98745 7.71545 9.83921 8.17026 9.97528 8.58468L10.7963 11.0852C11.0982 12.0047 10.0482 12.774 9.2624 12.2091L7.08377 10.6426C6.73499 10.3919 6.26501 10.3919 5.91623 10.6426L3.7376 12.2091C2.95184 12.774 1.90184 12.0047 2.20373 11.0852L3.02473 8.58468C3.16079 8.17026 3.01255 7.71545 2.65839 7.46082L0.520074 5.92338C-0.268505 5.35639 0.132592 4.11146 1.10384 4.11146H3.76923C4.20132 4.11146 4.58454 3.83393 4.71933 3.4234L5.5499 0.89373Z"
                  fill="#FFB800"
                />
              </Svg>
              <Text className="ml-2">5.0</Text>
              <Svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M6.5 2L3 6L1.5 4.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
            <Text className="text-xs max-w-[260px]">
              Un coliving para todos los creativos que recorren el mundo y sus
              ciudades para inspirarse y darle vida a su arte, proyectos y
              emprendimientos.
            </Text>
            <Text className="text-[#3533FF] underline font-medium">
              Reserva en Indie
            </Text>
            <View className="flex flex-row items-center space-x-5">
              <View className="items-center">
                <Text className="text-black text-2xl font-bold">
                  $4.400.000
                </Text>
                <Text className="font-medium">Monto Invertido</Text>
              </View>
              <View className="items-center">
                <Text className="text-black text-2xl font-bold">40</Text>
                <Text className="font-medium">Shares</Text>
              </View>
              <Pressable className="px-4 py-3 bg-black rounded-full text-center">
                <Text className="text-white text-xs font-bold ">
                  Ver inversión
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View className="p-4 bg-white rounded-md">
          <View className="flex flex-col space-y-2 items-start">
            <Text className="px-6 py-1 bg-[#C8E4FF] rounded-lg text-black text-xs">
              Exitoso
            </Text>
            <View className="flex flex-row items-center">
              <Text className="text-3xl font-bold">Nido de Agua</Text>
              <Svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-4"
              >
                <Path
                  d="M5.5499 0.89373C5.85111 -0.0236742 7.14889 -0.023675 7.4501 0.893729L8.28067 3.4234C8.41546 3.83393 8.79868 4.11146 9.23077 4.11146H11.8962C12.8674 4.11146 13.2685 5.35639 12.4799 5.92338L10.3416 7.46082C9.98745 7.71545 9.83921 8.17026 9.97528 8.58468L10.7963 11.0852C11.0982 12.0047 10.0482 12.774 9.2624 12.2091L7.08377 10.6426C6.73499 10.3919 6.26501 10.3919 5.91623 10.6426L3.7376 12.2091C2.95184 12.774 1.90184 12.0047 2.20373 11.0852L3.02473 8.58468C3.16079 8.17026 3.01255 7.71545 2.65839 7.46082L0.520074 5.92338C-0.268505 5.35639 0.132592 4.11146 1.10384 4.11146H3.76923C4.20132 4.11146 4.58454 3.83393 4.71933 3.4234L5.5499 0.89373Z"
                  fill="#FFB800"
                />
              </Svg>
              <Text className="ml-2">5.0</Text>
              <Svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M6.5 2L3 6L1.5 4.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
            <Text className="text-xs max-w-[260px]">
              Un coliving para todos los creativos que recorren el mundo y sus
              ciudades para inspirarse y darle vida a su arte, proyectos y
              emprendimientos.
            </Text>
            <Text className="text-[#3533FF] underline font-medium">
              Reserva en Indie
            </Text>
            <View className="flex flex-row items-center space-x-5">
              <View className="items-center">
                <Text className="text-black text-2xl font-bold">
                  $4.400.000
                </Text>
                <Text className="font-medium">Monto Invertido</Text>
              </View>
              <View className="items-center">
                <Text className="text-black text-2xl font-bold">40</Text>
                <Text className="font-medium">Shares</Text>
              </View>
              <Pressable className="px-4 py-3 bg-black rounded-full text-center">
                <Text className="text-white text-xs font-bold ">
                  Ver inversión
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
