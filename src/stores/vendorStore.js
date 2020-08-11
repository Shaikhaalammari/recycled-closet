import { decorate, observable } from "mobx";
import instance from "./instance";

class VendorStore {
  vendors = [];
  loading = true;

  fetchVendors = async () => {
    try {
      const response = await instance.get("http://localhost:8000/vendors");
      this.vendors = response.data;
      console.log(response.data);
      this.loading = false;
    } catch (error) {
      console.error("VendorStore ->fetchProduct ->error", error);
    }
  };
  createVendor = async (newVendor) => {
    try {
      const formData = new FormData();
      for (const key in newVendor) formData.append(key, newVendor[key]);
      const res = await instance.post(
        "http://localhost:8000/vendors",
        formData
      );
      this.vendors.push(res.data);
    } catch (error) {
      console.log("VendorStore-> createVendor -> error", error);
    }
  };

  deleteVendor = async (vendorId) => {
    try {
      await instance.delete(`http://localhost:8000/vendors/${vendorId}`);
      this.vendors = this.vendors.filter((vendor) => vendor.id !== +vendorId);
    } catch (error) {
      console.log("VendorStore -> deleteVendor -> error", error);
    }
  };

  updateVendor = async (updatedVendor) => {
    try {
      const formData = new FormData();
      for (const key in updatedVendor) formData.append(key, updatedVendor[key]);
      await instance.put(
        `http://localhost:8000/vendors/${updatedVendor.id}`,
        formData
      );

      const vendor = this.vendors.find(
        (vendor) => vendor.id === updatedVendor.id
      );
      for (const key in vendor) vendor[key] = updatedVendor[key];
    } catch (error) {
      console.log("VendorStore -> updateVendor -> error", error);
    }
  };
}

decorate(VendorStore, {
  products: observable,
  vendors: observable,
  loading: observable,
});

const vendorStore = new VendorStore();
vendorStore.fetchVendors();
export default vendorStore;
