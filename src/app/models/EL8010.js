/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EL8010', {
    EL8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EL8_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL8_TPPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL8_TIPENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    EL8_IDLOTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EL8_ARQENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    EL8_DATAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL8_HORAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL8_USERG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    EL8_DATAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL8_HORAE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL8_USERE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    EL8_ARQREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EL8_DATAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL8_HORAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL8_USERR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    EL8_DATAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL8_HORAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EL8_USERP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    EL8_NROREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    EL8_CODERR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    EL8_TPINT: {
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
    tableName: 'EL8010'
  });
};
