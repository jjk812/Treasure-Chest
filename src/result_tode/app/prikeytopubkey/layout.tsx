"use client";

import { HStack, Center } from "@chakra-ui/react";
import { Layout } from "@/components/Layout";
import { Sidebar, SidebarItem } from "@/components/Sidebar";
import subdomains from "@/subdomains";

const SidebarItems: SidebarItem[] = [
  { name: "PriKeyToPubKey", path: "prikeytopubkey" },
];

const PrivateKeyToPublicKeyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <HStack alignItems={"stretch"} h="full">
        <Sidebar
          heading="PriKeyToPubKey"
          items={SidebarItems}
          subdomain={subdomains.PRIVATEKEYTOPUBLICKEY}
        />
        <Center flexDir={"column"} w="full">
          {children}
        </Center>
      </HStack>
    </Layout>
  );
};

export default PrivateKeyToPublicKeyLayout;