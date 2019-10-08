/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AO6010', {
    AO6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AO6_CODMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AO6_ENTMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AO6_TITULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    AO6_DESCRI: {
      type: "IMAGE",
      allowNull: true
    },
    AO6_ASSUNT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    AO6_MENSAG: {
      type: "IMAGE",
      allowNull: true
    },
    AO6_ANEXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO6_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO6_LNKIMG: {
      type: "IMAGE",
      allowNull: true
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
    tableName: 'AO6010'
  });
};
