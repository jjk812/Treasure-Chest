"use client";

import { HStack, Center } from "@chakra-ui/react";
import { Layout } from "@/components/Layout";
import { Sidebar, SidebarItem } from "@/components/Sidebar";
import subdomains from "@/subdomains";

const SidebarItems: SidebarItem[] = [
  { name: "BatchSign", path: "batchsign" },
  { name: "EcRecoverSign", path: "ecrecoversign" },
  { name: "SignData", path: "signdata" }
];

const SignatureLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <HStack alignItems={"stretch"} h="full">
        <Sidebar
          heading="Signture"
          items={SidebarItems}
          subdomain={subdomains.SIGNATURE}
        />
        <Center flexDir={"column"} w="full">
          {children}
        </Center>
      </HStack>
    </Layout>
  );
};

export default SignatureLayout;
