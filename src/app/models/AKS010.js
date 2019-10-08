/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AKS010', {
    AKS_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AKS_CONFIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AKS_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                      '
    },
    AKS_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AKS_SDCRD1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKS_SDDEB1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKS_SDCRD2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKS_SDDEB2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKS_SDCRD3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKS_SDDEB3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKS_SDCRD4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKS_SDDEB4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKS_SDCRD5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKS_SDDEB5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AKS_NIV01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AKS_NIV02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AKS_NIV03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AKS_NIV04: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AKS_NIV05: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AKS_NIV06: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    AKS_TPSALD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    }
  }, {
    tableName: 'AKS010'
  });
};
