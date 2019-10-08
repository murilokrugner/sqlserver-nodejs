/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CC7010', {
    CC7_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CC7_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CC7_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CC7_CODLAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CC7_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CC7_TPREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CC7_CODOLD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                      '
    },
    CC7_IFCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    },
    CC7_CLANAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CC7_CODREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    CC7_DTINCL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CC7_CLANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CC7_GUIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CC7_CODIPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'CC7010'
  });
};
