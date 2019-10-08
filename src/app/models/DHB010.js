/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DHB010', {
    DHB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DHB_CPFMOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    DHB_NOMMOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DHB_NUMCNH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DHB_DTVALE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DHB_CATEGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DHB_DTNASC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DHB_REGIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    DHB_EXPCNH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DHB_DTCNH1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DHB_VENCTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DHB_DTREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DHB_DTVIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DHB_ITEMDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    DHB_OBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    DHB_HISLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    DHB_RESLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'DHB010'
  });
};
