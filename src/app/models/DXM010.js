/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DXM010', {
    DXM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DXM_TIPMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DXM_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DXM_DTEMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DXM_SAFRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DXM_PRDTOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DXM_LJPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DXM_FAZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DXM_MOTORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    DXM_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DXM_DTDIGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DXM_TRANSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DXM_PLACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DXM_PLACA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DXM_PLACA3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DXM_PROPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DXM_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DXM_NOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DXM_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DXM_VLFISC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DXM_PSFISC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DXM_ITEMNF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DXM_PSLONA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DXM_PSBRUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DXM_PSTARA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DXM_PSLIQU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DXM_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DXM_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    DXM_NUMDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DXM_OP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    DXM_NFCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DXM_SRCOMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DXM_CODUNB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DXM_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    DXM_MODPS1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DXM_MODPS2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'DXM010'
  });
};
