/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VC1010', {
    VC1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VC1_TIPAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VC1_DATAGE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VC1_DATVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VC1_CODVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VC1_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VC1_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VC1_CODABO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VC1_TIPCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VC1_EMIFIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VC1_OCOMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VC1_CODMAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VC1_MODVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VC1_QTDINT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VC1_DATINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VC1_PREPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VC1_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VC1_PROCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    VC1_TIPORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VC1_PROVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VC1_PROTPA: {
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
    VC1_CDPROS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VC1_LJPROS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VC1_OBSOBJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VC1_NOMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    VC1_ESTVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VC1_MOTPNR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VC1_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VC1_CONPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VC1_OFECNS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VC1_OFESEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'VC1010'
  });
};
