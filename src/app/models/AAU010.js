/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AAU010', {
    AAU_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AAU_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AAU_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AAU_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AAU_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AAU_QTDVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AAU_PRCVEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AAU_PRCTAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AAU_VLRTOT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AAU_TPPROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AAU_OBSPRD: {
      type: "IMAGE",
      allowNull: true
    },
    AAU_PMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AAU_ITPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AAU_ITPROP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AAU_CODVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AAU_FOLDER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AAU_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AAU_OBRIG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'AAU010'
  });
};
