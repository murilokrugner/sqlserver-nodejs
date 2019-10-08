/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMH010', {
    TMH_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TMH_QUESTI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMH_QUESTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TMH_PERGUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    TMH_INDSEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TMH_CODGRU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TMH_COMBO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    TMH_TPLIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TMH_ONMEMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TMH_COMBO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                          '
    },
    TMH_DEFAUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TMH_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMH_RESPOS: {
      type: "VARBINARY",
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
    tableName: 'TMH010'
  });
};
